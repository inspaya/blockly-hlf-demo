let toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
        {
            "kind": "block",
            "type": "controls_if"
        },
        {
            "kind": "block",
            "type": "controls_whileUntil"
        }
    ]
};
var workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });