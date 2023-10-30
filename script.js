const startNodeId = +location.hash.slice(1) || 15
const nodeHeading = document.getElementById('node-heading')
const [nodeNameText, nodeTypeBtn] = nodeHeading.children
const nodeDescriptionParagraph = nodeHeading.nextElementSibling
const nodeList = document.getElementById('related-node-list')
const nodeTemplate = document.getElementById('node-template')

presentNode(startNodeId)

window.onhashchange = handleHashChange

function handleHashChange() {
  const nodeId = +location.hash.slice(1) || startNodeId

  presentNode(nodeId)
}

function presentNode(nodeId) {
  const nodeDescriptor = getNodeInfo(nodeId)
  const nodeDescriptors = getConnectedNodesInfo(nodeId)
  const nodeItems = []

  for (const descriptor of nodeDescriptors) {
    const { li, span, a, button } = useNodeTemplate()

    span.textContent = descriptor.relation
    a.href = `#${descriptor.id}`
    a.title = descriptor.text
    a.textContent = descriptor.label
    button.textContent = descriptor.type

    nodeItems.push(li)
  }

  nodeList.replaceChildren(...nodeItems)
  nodeNameText.textContent = nodeDescriptor.label
  nodeNameText.title = 'id: ' + nodeDescriptor.id
  nodeTypeBtn.textContent = nodeDescriptor.type
  nodeDescriptionParagraph.textContent = nodeDescriptor.text
}

function getNodeInfo(nodeId) {
  const node = nodes.find(node => node.id === nodeId)
  const description = descriptions.find(desc => desc.nodeId === nodeId)

  return { ...node, text: description?.text }
}

function getConnectedNodesInfo(nodeId) {
  const targetEdges = edges.filter(edge => edge.source === nodeId)
  const sourceEdges = edges.filter(edge => edge.target === nodeId)
  const targetNodes = targetEdges.map(edge => ({ ...getNodeInfo(edge.target), relation: edge.relation }))
  const sourceNodes = sourceEdges.map(edge => ({ ...getNodeInfo(edge.source), relation: reverseDict[edge.relation] }))

  return [...sourceNodes, ...targetNodes]
}

function useNodeTemplate() {
  const li = nodeTemplate.content.cloneNode(true).firstElementChild
  const [span, a, button] = li.children

  return { li, span, a, button }
}
