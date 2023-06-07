# Building Smart Contracts on a Hyperledger Fabric (HLF) network using Blockly

The Hyperledger Fabric network is an enterprise-level, permissioned blockchain protocol with privacy controls. Business logic, also known as "smart contracts" can be written in any of the following languages: NodeJS, Java, and Go. Non-developers are currently unable to define execution logic due to lack of software development knowledge and skills. This talk highlights how Blockly can be used to author smart contracts through its familiar drag-n-drop interface to bridge the knowledge gap for non-developers to easily create logic to match their specific use cases.

## Approach

* Build custom blocks to represent common methods in a contract on the HLF network e.g. `AssetExists`, `CreateAsset`, `ReadAsset`.
* Expose blocks relevant to the specific target groups using custom Workspace configurations pre-populated on the backend.
* Limit the code produced on the client by generators to non-sensitive code only by replacing potentially sensitive operations with placeholders. These placeholders are then replaced with appropriate code values on the backend subject to approval based on existing network policy.


## Sample Smart Contracts and Proposed Blockly Equivalents

NodeJS
```
// AssetExists returns true when asset with given ID exists in world state.
    async AssetExists(ctx, id) {
        const assetJSON = await ctx.stub.getState(id);
        return assetJSON && assetJSON.length > 0;
    }
``` 

Blockly
![AssetExists Function in Blockly](./assets/asset_exists.png)