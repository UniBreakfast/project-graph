const nodes = [
  { id: 1, label: 'graph-structure.js', type: 'file', format: 'js' },
  { id: 2, label: 'nodes', type: 'js entity', entityType: 'constant', data: 'array' },
  { id: 3, label: 'edges', type: 'js entity', entityType: 'constant', data: 'array' },
  { id: 4, label: 'descriptions', type: 'js entity', entityType: 'constant', data: 'array' },
  { id: 5, label: 'node', type: 'array items', data: 'object', multiple: true },
  { id: 6, label: 'edge', type: 'array items', data: 'object', multiple: true },
  { id: 7, label: 'description', type: 'array items', data: 'object', multiple: true },
  { id: 15, label: 'project-graph', type: 'folder' },
  { id: 17, label: 'index.html', type: 'file', format: 'html' },
  { id: 19, label: 'reverseDict', type: 'js entity', entityType: 'constant', data: 'object' },
  { id: 21, label: 'nodeList', type: 'js entity', entityType: 'constant', data: 'ul element' },
  { id: 22, label: 'nodeNameText', type: 'js entity', entityType: 'constant', data: 'b element' },
  { id: 23, label: 'script.js', type: 'file', format: 'js' },
  { id: 24, label: 'nodeTemplate', type: 'js entity', entityType: 'constant', data: 'template element' },
  { id: 25, label: 'nodeTypeBtn', type: 'js entity', entityType: 'constant', data: 'button element' },
  { id: 26, label: 'nodeDescriptionParagraph', type: 'js entity', entityType: 'constant', data: 'p element' },
  { id: 27, label: 'handleHashChange', type: 'function', purpose: 'event handler' },
  { id: 28, label: 'handleNodeClick', type: 'function', purpose: 'event handler' },
  { id: 29, label: 'presentNode', type: 'function', purpose: 'ui modification' },
  { id: 30, label: 'getNodeInfo', type: 'function', purpose: 'data aggregation' },
  { id: 31, label: 'getConnectedNodesInfo', type: 'function', purpose: 'data aggregation' },
  { id: 32, label: 'useNodeTemplate', type: 'function', purpose: 'factory' },
  { id: 33, label: 'handleHashChange', type: 'function', purpose: 'event handler' },
  { id: 34, label: 'startNodeId', type: 'js entity', entityType: 'constant', data: 'number' },
  { id: 35, label: 'nodeHeading', type: 'js entity', entityType: 'constant', data: 'h2 element' },

]

const edges = [
  // graph-structure.js contains nodes, edges, descriptions and reverseDict
  { id: 8, source: 1, target: 2, relation: 'contains' },
  { id: 9, source: 1, target: 3, relation: 'contains' },
  { id: 10, source: 1, target: 4, relation: 'contains' },
  { id: 20, source: 1, target: 19, relation: 'contains' },
  // nodes contains node
  { id: 12, source: 2, target: 5, relation: 'contains' },
  // edges contains edge
  { id: 13, source: 3, target: 6, relation: 'contains' },
  // descriptions contains description
  { id: 14, source: 4, target: 7, relation: 'contains' },
  // project-graph contains index.html, graph-structure.js and script.js
  { id: 16, source: 15, target: 1, relation: 'contains' },
  { id: 19, source: 15, target: 17, relation: 'contains' },
  { id: 36, source: 15, target: 23, relation: 'contains' },
  // index.html loads graph-structure.js, script.js
  { id: 18, source: 17, target: 1, relation: 'loads' },
  { id: 37, source: 17, target: 23, relation: 'loads' },
  // script.js contains nodeList, nodeNameText, nodeTypeBtn, nodeDescriptionParagraph, handleHashChange, presentNode, getNodeInfo, getConnectedNodesInfo, useNodeTemplate
  { id: 38, source: 23, target: 21, relation: 'contains' },
  { id: 39, source: 23, target: 22, relation: 'contains' },
  { id: 40, source: 23, target: 25, relation: 'contains' },
  { id: 41, source: 23, target: 26, relation: 'contains' },
  { id: 42, source: 23, target: 27, relation: 'contains' },
  { id: 43, source: 23, target: 29, relation: 'contains' },
  { id: 44, source: 23, target: 30, relation: 'contains' },
  { id: 45, source: 23, target: 31, relation: 'contains' },
  { id: 46, source: 23, target: 32, relation: 'contains' },
]

const descriptions = [
  { nodeId: 1, text: 'This file contains the graph structure of the project.' },
  { nodeId: 2, text: 'The nodes constant is an array that contains all the nodes of the graph.' },
  { nodeId: 3, text: 'The edges constant is an array that contains all the edges of the graph.' },
  { nodeId: 4, text: 'The descriptions constant is an array that contains all the descriptions of the graph.' },
  { nodeId: 5, text: 'Multiple node objects contain the node id, label, type and other data about each node.' },
  { nodeId: 6, text: 'Multiple edge objects contain the source node id, target node id, label and other data about each edge.' },
  { nodeId: 7, text: 'Multiple description objects contain the node id and text of each node or edge description.' },
  { nodeId: 15, text: 'The project-graph folder is the project root, it contains all the files of the project.' },
  { nodeId: 17, text: 'The index.html file is the web page that gives a user access to the graph.' },
]

const reverseDict = {
  'contains': 'contained by',
  'loads': 'loaded by',
}
