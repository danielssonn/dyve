/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTPool, NFTPoolInterface } from "../../contracts/NFTPool";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
    ],
    name: "getAllListedNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listedOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tknAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tknId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "listingLength",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "compliance",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "dailyFee",
            type: "uint256",
          },
          {
            internalType: "enum ReturnCondition",
            name: "returnCondition",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "currency",
                type: "string",
              },
            ],
            internalType: "struct NFTCollateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listedOn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tknAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tknId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listingLength",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "complianceCheck",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dailyFee",
        type: "uint256",
      },
      {
        internalType: "enum ReturnCondition",
        name: "returnCondition",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "currency",
            type: "string",
          },
        ],
        internalType: "struct NFTCollateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    name: "listNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listedNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "listedOn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tknAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tknId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "listingLength",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "compliance",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dailyFee",
        type: "uint256",
      },
      {
        internalType: "enum ReturnCondition",
        name: "returnCondition",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "currency",
            type: "string",
          },
        ],
        internalType: "struct NFTCollateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "listedNFTCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611e448061010d6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063affb16e011610066578063affb16e014610150578063bc197c8114610180578063e3a661da146101b0578063f23a6e61146101e0578063f2fde38b146102105761009e565b806301ffc9a7146100a3578063151e2aa1146100d35780631a9b3694146100ef578063715018a6146101285780638da5cb5b14610132575b600080fd5b6100bd60048036038101906100b891906112eb565b61022c565b6040516100ca91906117fb565b60405180910390f35b6100ed60048036038101906100e89190611318565b6102a6565b005b610109600480360381019061010491906112ab565b6105bc565b60405161011f9a9998979695949392919061188c565b60405180910390f35b610130610778565b005b61013a61078c565b6040516101479190611766565b60405180910390f35b61016a60048036038101906101659190611108565b6107b5565b60405161017791906117d9565b60405180910390f35b61019a60048036038101906101959190611135565b610b3e565b6040516101a79190611816565b60405180910390f35b6101ca60048036038101906101c59190611108565b610b6f565b6040516101d79190611871565b60405180910390f35b6101fa60048036038101906101f59190611211565b610b87565b6040516102079190611816565b60405180910390f35b61022a60048036038101906102259190611108565b610bb6565b005b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029f575061029e82610c3a565b5b9050919050565b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546102f29190611a03565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506040518061014001604052808c81526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018981526020018881526020018781526020018681526020018560018111156103d8576103d7611c0f565b5b815260200184815260200183815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a08201518160050190805190602001906104c2929190610dee565b5060c0820151816006015560e08201518160070160006101000a81548160ff021916908360018111156104f8576104f7611c0f565b5b0217905550610100820151816008015561012082015181600901600082015181600001556020820151816001019080519060200190610538929190610dee565b5050509050508973ffffffffffffffffffffffffffffffffffffffff1663f242432a33308c8c6040518563ffffffff1660e01b815260040161057d9493929190611781565b600060405180830381600087803b15801561059757600080fd5b505af11580156105ab573d6000803e3d6000fd5b505050505050505050505050505050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301549080600401549080600501805461062a90611b34565b80601f016020809104026020016040519081016040528092919081815260200182805461065690611b34565b80156106a35780601f10610678576101008083540402835291602001916106a3565b820191906000526020600020905b81548152906001019060200180831161068657829003601f168201915b5050505050908060060154908060070160009054906101000a900460ff169080600801549080600901604051806040016040529081600082015481526020016001820180546106f190611b34565b80601f016020809104026020016040519081016040528092919081815260200182805461071d90611b34565b801561076a5780601f1061073f5761010080835404028352916020019161076a565b820191906000526020600020905b81548152906001019060200180831161074d57829003601f168201915b50505050508152505090508a565b610780610ca4565b61078a6000610d22565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205467ffffffffffffffff81111561081257610811611c9c565b5b60405190808252806020026020018201604052801561084b57816020015b610838610e74565b8152602001906001900390816108305790505b50905060005b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811015610b3457600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060405180610140016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820154815260200160058201805461098290611b34565b80601f01602080910402602001604051908101604052809291908181526020018280546109ae90611b34565b80156109fb5780601f106109d0576101008083540402835291602001916109fb565b820191906000526020600020905b8154815290600101906020018083116109de57829003601f168201915b50505050508152602001600682015481526020016007820160009054906101000a900460ff166001811115610a3357610a32611c0f565b5b6001811115610a4557610a44611c0f565b5b8152602001600882015481526020016009820160405180604001604052908160008201548152602001600182018054610a7d90611b34565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa990611b34565b8015610af65780601f10610acb57610100808354040283529160200191610af6565b820191906000526020600020905b815481529060010190602001808311610ad957829003601f168201915b50505050508152505081525050828281518110610b1657610b15611c6d565b5b60200260200101819052508080610b2c90611b97565b915050610851565b5080915050919050565b60007fbc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f6694146621905098975050505050505050565b60026020528060005260406000206000915090505481565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf9790509695505050505050565b610bbe610ca4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2590611831565b60405180910390fd5b610c3781610d22565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610cac610de6565b73ffffffffffffffffffffffffffffffffffffffff16610cca61078c565b73ffffffffffffffffffffffffffffffffffffffff1614610d20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1790611851565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b828054610dfa90611b34565b90600052602060002090601f016020900481019282610e1c5760008555610e63565b82601f10610e3557805160ff1916838001178555610e63565b82800160010185558215610e63579182015b82811115610e62578251825591602001919060010190610e47565b5b509050610e709190610ef5565b5090565b60405180610140016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001606081526020016000815260200160006001811115610edb57610eda611c0f565b5b815260200160008152602001610eef610f12565b81525090565b5b80821115610f0e576000816000905550600101610ef6565b5090565b604051806040016040528060008152602001606081525090565b6000610f3f610f3a8461195b565b611936565b905082815260208101848484011115610f5b57610f5a611ce4565b5b610f66848285611af2565b509392505050565b600081359050610f7d81611db9565b92915050565b60008083601f840112610f9957610f98611cd0565b5b8235905067ffffffffffffffff811115610fb657610fb5611ccb565b5b602083019150836020820283011115610fd257610fd1611cdf565b5b9250929050565b600081359050610fe881611dd0565b92915050565b60008083601f84011261100457611003611cd0565b5b8235905067ffffffffffffffff81111561102157611020611ccb565b5b60208301915083600182028301111561103d5761103c611cdf565b5b9250929050565b60008135905061105381611de7565b92915050565b600082601f83011261106e5761106d611cd0565b5b813561107e848260208601610f2c565b91505092915050565b60006040828403121561109d5761109c611cd5565b5b6110a76040611936565b905060006110b7848285016110f3565b600083015250602082013567ffffffffffffffff8111156110db576110da611cda565b5b6110e784828501611059565b60208301525092915050565b60008135905061110281611df7565b92915050565b60006020828403121561111e5761111d611cee565b5b600061112c84828501610f6e565b91505092915050565b60008060008060008060008060a0898b03121561115557611154611cee565b5b60006111638b828c01610f6e565b98505060206111748b828c01610f6e565b975050604089013567ffffffffffffffff81111561119557611194611ce9565b5b6111a18b828c01610f83565b9650965050606089013567ffffffffffffffff8111156111c4576111c3611ce9565b5b6111d08b828c01610f83565b9450945050608089013567ffffffffffffffff8111156111f3576111f2611ce9565b5b6111ff8b828c01610fee565b92509250509295985092959890939650565b60008060008060008060a0878903121561122e5761122d611cee565b5b600061123c89828a01610f6e565b965050602061124d89828a01610f6e565b955050604061125e89828a016110f3565b945050606061126f89828a016110f3565b935050608087013567ffffffffffffffff8111156112905761128f611ce9565b5b61129c89828a01610fee565b92509250509295509295509295565b600080604083850312156112c2576112c1611cee565b5b60006112d085828601610f6e565b92505060206112e1858286016110f3565b9150509250929050565b60006020828403121561130157611300611cee565b5b600061130f84828501610fd9565b91505092915050565b6000806000806000806000806000806101408b8d03121561133c5761133b611cee565b5b600061134a8d828e016110f3565b9a5050602061135b8d828e01610f6e565b995050604061136c8d828e016110f3565b985050606061137d8d828e016110f3565b975050608061138e8d828e016110f3565b96505060a08b013567ffffffffffffffff8111156113af576113ae611ce9565b5b6113bb8d828e01611059565b95505060c06113cc8d828e016110f3565b94505060e06113dd8d828e01611044565b9350506101006113ef8d828e016110f3565b9250506101208b013567ffffffffffffffff81111561141157611410611ce9565b5b61141d8d828e01611087565b9150509295989b9194979a5092959850565b600061143b8383611667565b905092915050565b61144c81611a59565b82525050565b61145b81611a59565b82525050565b600061146c8261199c565b61147681856119bf565b9350836020820285016114888561198c565b8060005b858110156114c457848403895281516114a5858261142f565b94506114b0836119b2565b925060208a0199505060018101905061148c565b50829750879550505050505092915050565b6114df81611a6b565b82525050565b6114ee81611a77565b82525050565b6114fd81611ae0565b82525050565b61150c81611ae0565b82525050565b600061151d826119a7565b61152781856119e1565b9350611537818560208601611b01565b61154081611cf3565b840191505092915050565b6000611556826119a7565b61156081856119f2565b9350611570818560208601611b01565b61157981611cf3565b840191505092915050565b60006115916026836119f2565b915061159c82611d04565b604082019050919050565b60006115b46004836119d0565b91506115bf82611d53565b602082019050919050565b60006115d76020836119f2565b91506115e282611d7c565b602082019050919050565b60006040830160008301516116056000860182611748565b506020830151848203602086015261161d8282611512565b9150508091505092915050565b60006040830160008301516116426000860182611748565b506020830151848203602086015261165a8282611512565b9150508091505092915050565b6000610140830160008301516116806000860182611748565b5060208301516116936020860182611443565b5060408301516116a66040860182611748565b5060608301516116b96060860182611748565b5060808301516116cc6080860182611748565b5060a083015184820360a08601526116e48282611512565b91505060c08301516116f960c0860182611748565b5060e083015161170c60e08601826114f4565b50610100830151611721610100860182611748565b5061012083015184820361012086015261173b82826115ed565b9150508091505092915050565b61175181611ad6565b82525050565b61176081611ad6565b82525050565b600060208201905061177b6000830184611452565b92915050565b600060a0820190506117966000830187611452565b6117a36020830186611452565b6117b06040830185611757565b6117bd6060830184611757565b81810360808301526117ce816115a7565b905095945050505050565b600060208201905081810360008301526117f38184611461565b905092915050565b600060208201905061181060008301846114d6565b92915050565b600060208201905061182b60008301846114e5565b92915050565b6000602082019050818103600083015261184a81611584565b9050919050565b6000602082019050818103600083015261186a816115ca565b9050919050565b60006020820190506118866000830184611757565b92915050565b6000610140820190506118a2600083018d611757565b6118af602083018c611452565b6118bc604083018b611757565b6118c9606083018a611757565b6118d66080830189611757565b81810360a08301526118e8818861154b565b90506118f760c0830187611757565b61190460e0830186611503565b611912610100830185611757565b818103610120830152611925818461162a565b90509b9a5050505050505050505050565b6000611940611951565b905061194c8282611b66565b919050565b6000604051905090565b600067ffffffffffffffff82111561197657611975611c9c565b5b61197f82611cf3565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611a0e82611ad6565b9150611a1983611ad6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a4e57611a4d611be0565b5b828201905092915050565b6000611a6482611ab6565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050611ab182611da5565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611aeb82611aa3565b9050919050565b82818337600083830152505050565b60005b83811015611b1f578082015181840152602081019050611b04565b83811115611b2e576000848401525b50505050565b60006002820490506001821680611b4c57607f821691505b60208210811415611b6057611b5f611c3e565b5b50919050565b611b6f82611cf3565b810181811067ffffffffffffffff82111715611b8e57611b8d611c9c565b5b80604052505050565b6000611ba282611ad6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611bd557611bd4611be0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f3078303000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60028110611db657611db5611c0f565b5b50565b611dc281611a59565b8114611dcd57600080fd5b50565b611dd981611a77565b8114611de457600080fd5b50565b60028110611df457600080fd5b50565b611e0081611ad6565b8114611e0b57600080fd5b5056fea2646970667358221220d3c45962b7cd4fad170874ee0b232c5d08d94635a9b486b6e3d459bcfb8daf6764736f6c63430008070033";

type NFTPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTPool__factory extends ContractFactory {
  constructor(...args: NFTPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTPool> {
    return super.deploy(overrides || {}) as Promise<NFTPool>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTPool {
    return super.attach(address) as NFTPool;
  }
  override connect(signer: Signer): NFTPool__factory {
    return super.connect(signer) as NFTPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTPoolInterface {
    return new utils.Interface(_abi) as NFTPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTPool {
    return new Contract(address, _abi, signerOrProvider) as NFTPool;
  }
}
