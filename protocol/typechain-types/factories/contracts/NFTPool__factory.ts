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
    name: "getListedNFTs",
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
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611c598061010d6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639cc938e2116100665780639cc938e21461014e578063bc197c811461017e578063e3a661da146101ae578063f23a6e61146101de578063f2fde38b1461020e5761009e565b806301ffc9a7146100a35780631a9b3694146100d3578063715018a61461010a5780638da5cb5b14610114578063927a758114610132575b600080fd5b6100bd60048036038101906100b89190611226565b61022a565b6040516100ca9190611668565b60405180910390f35b6100ed60048036038101906100e891906111e6565b6102a4565b6040516101019897969594939291906116f9565b60405180910390f35b610112610454565b005b61011c610468565b604051610129919061162b565b60405180910390f35b61014c60048036038101906101479190611253565b610491565b005b61016860048036038101906101639190611043565b610712565b6040516101759190611646565b60405180910390f35b61019860048036038101906101939190611070565b610a87565b6040516101a59190611683565b60405180910390f35b6101c860048036038101906101c39190611043565b610ab8565b6040516101d591906116de565b60405180910390f35b6101f860048036038101906101f3919061114c565b610ad0565b6040516102059190611683565b60405180910390f35b61022860048036038101906102239190611043565b610aff565b005b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029d575061029c82610b83565b5b9050919050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201549080600301805461030690611972565b80601f016020809104026020016040519081016040528092919081815260200182805461033290611972565b801561037f5780601f106103545761010080835404028352916020019161037f565b820191906000526020600020905b81548152906001019060200180831161036257829003601f168201915b5050505050908060040154908060050160009054906101000a900460ff169080600601549080600701604051806040016040529081600082015481526020016001820180546103cd90611972565b80601f01602080910402602001604051908101604052809291908181526020018280546103f990611972565b80156104465780601f1061041b57610100808354040283529160200191610446565b820191906000526020600020905b81548152906001019060200180831161042957829003601f168201915b505050505081525050905088565b61045c610bed565b6104666000610c6b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104dd9190611841565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506040518061010001604052808a81526020018973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018681526020018560018111156105b7576105b6611a4d565b5b815260200184815260200183815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061068d929190610d37565b506080820151816004015560a08201518160050160006101000a81548160ff021916908360018111156106c3576106c2611a4d565b5b021790555060c0820151816006015560e082015181600701600082015181600001556020820151816001019080519060200190610701929190610d37565b505050905050505050505050505050565b60606000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205467ffffffffffffffff81111561076f5761076e611ada565b5b6040519080825280602002602001820160405280156107a857816020015b610795610dbd565b81526020019060019003908161078d5790505b50905060005b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811015610a7d57600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060405180610100016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546108cb90611972565b80601f01602080910402602001604051908101604052809291908181526020018280546108f790611972565b80156109445780601f1061091957610100808354040283529160200191610944565b820191906000526020600020905b81548152906001019060200180831161092757829003601f168201915b50505050508152602001600482015481526020016005820160009054906101000a900460ff16600181111561097c5761097b611a4d565b5b600181111561098e5761098d611a4d565b5b81526020016006820154815260200160078201604051806040016040529081600082015481526020016001820180546109c690611972565b80601f01602080910402602001604051908101604052809291908181526020018280546109f290611972565b8015610a3f5780601f10610a1457610100808354040283529160200191610a3f565b820191906000526020600020905b815481529060010190602001808311610a2257829003601f168201915b50505050508152505081525050828281518110610a5f57610a5e611aab565b5b60200260200101819052508080610a75906119d5565b9150506107ae565b5080915050919050565b60007fbc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f6694146621905098975050505050505050565b60026020528060005260406000206000915090505481565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf9790509695505050505050565b610b07610bed565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e9061169e565b60405180910390fd5b610b8081610c6b565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610bf5610d2f565b73ffffffffffffffffffffffffffffffffffffffff16610c13610468565b73ffffffffffffffffffffffffffffffffffffffff1614610c69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c60906116be565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b828054610d4390611972565b90600052602060002090601f016020900481019282610d655760008555610dac565b82601f10610d7e57805160ff1916838001178555610dac565b82800160010185558215610dac579182015b82811115610dab578251825591602001919060010190610d90565b5b509050610db99190610e30565b5090565b60405180610100016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001606081526020016000815260200160006001811115610e1657610e15611a4d565b5b815260200160008152602001610e2a610e4d565b81525090565b5b80821115610e49576000816000905550600101610e31565b5090565b604051806040016040528060008152602001606081525090565b6000610e7a610e75846117aa565b611785565b905082815260208101848484011115610e9657610e95611b22565b5b610ea1848285611930565b509392505050565b600081359050610eb881611bce565b92915050565b60008083601f840112610ed457610ed3611b0e565b5b8235905067ffffffffffffffff811115610ef157610ef0611b09565b5b602083019150836020820283011115610f0d57610f0c611b1d565b5b9250929050565b600081359050610f2381611be5565b92915050565b60008083601f840112610f3f57610f3e611b0e565b5b8235905067ffffffffffffffff811115610f5c57610f5b611b09565b5b602083019150836001820283011115610f7857610f77611b1d565b5b9250929050565b600081359050610f8e81611bfc565b92915050565b600082601f830112610fa957610fa8611b0e565b5b8135610fb9848260208601610e67565b91505092915050565b600060408284031215610fd857610fd7611b13565b5b610fe26040611785565b90506000610ff28482850161102e565b600083015250602082013567ffffffffffffffff81111561101657611015611b18565b5b61102284828501610f94565b60208301525092915050565b60008135905061103d81611c0c565b92915050565b60006020828403121561105957611058611b2c565b5b600061106784828501610ea9565b91505092915050565b60008060008060008060008060a0898b0312156110905761108f611b2c565b5b600061109e8b828c01610ea9565b98505060206110af8b828c01610ea9565b975050604089013567ffffffffffffffff8111156110d0576110cf611b27565b5b6110dc8b828c01610ebe565b9650965050606089013567ffffffffffffffff8111156110ff576110fe611b27565b5b61110b8b828c01610ebe565b9450945050608089013567ffffffffffffffff81111561112e5761112d611b27565b5b61113a8b828c01610f29565b92509250509295985092959890939650565b60008060008060008060a0878903121561116957611168611b2c565b5b600061117789828a01610ea9565b965050602061118889828a01610ea9565b955050604061119989828a0161102e565b94505060606111aa89828a0161102e565b935050608087013567ffffffffffffffff8111156111cb576111ca611b27565b5b6111d789828a01610f29565b92509250509295509295509295565b600080604083850312156111fd576111fc611b2c565b5b600061120b85828601610ea9565b925050602061121c8582860161102e565b9150509250929050565b60006020828403121561123c5761123b611b2c565b5b600061124a84828501610f14565b91505092915050565b600080600080600080600080610100898b03121561127457611273611b2c565b5b60006112828b828c0161102e565b98505060206112938b828c01610ea9565b97505060406112a48b828c0161102e565b965050606089013567ffffffffffffffff8111156112c5576112c4611b27565b5b6112d18b828c01610f94565b95505060806112e28b828c0161102e565b94505060a06112f38b828c01610f7f565b93505060c06113048b828c0161102e565b92505060e089013567ffffffffffffffff81111561132557611324611b27565b5b6113318b828c01610fc2565b9150509295985092959890939650565b600061134d8383611556565b905092915050565b61135e81611897565b82525050565b61136d81611897565b82525050565b600061137e826117eb565b611388818561180e565b93508360208202850161139a856117db565b8060005b858110156113d657848403895281516113b78582611341565b94506113c283611801565b925060208a0199505060018101905061139e565b50829750879550505050505092915050565b6113f1816118a9565b82525050565b611400816118b5565b82525050565b61140f8161191e565b82525050565b61141e8161191e565b82525050565b600061142f826117f6565b611439818561181f565b935061144981856020860161193f565b61145281611b31565b840191505092915050565b6000611468826117f6565b6114728185611830565b935061148281856020860161193f565b61148b81611b31565b840191505092915050565b60006114a3602683611830565b91506114ae82611b42565b604082019050919050565b60006114c6602083611830565b91506114d182611b91565b602082019050919050565b60006040830160008301516114f4600086018261160d565b506020830151848203602086015261150c8282611424565b9150508091505092915050565b6000604083016000830151611531600086018261160d565b50602083015184820360208601526115498282611424565b9150508091505092915050565b60006101008301600083015161156f600086018261160d565b5060208301516115826020860182611355565b506040830151611595604086018261160d565b50606083015184820360608601526115ad8282611424565b91505060808301516115c2608086018261160d565b5060a08301516115d560a0860182611406565b5060c08301516115e860c086018261160d565b5060e083015184820360e086015261160082826114dc565b9150508091505092915050565b61161681611914565b82525050565b61162581611914565b82525050565b60006020820190506116406000830184611364565b92915050565b600060208201905081810360008301526116608184611373565b905092915050565b600060208201905061167d60008301846113e8565b92915050565b600060208201905061169860008301846113f7565b92915050565b600060208201905081810360008301526116b781611496565b9050919050565b600060208201905081810360008301526116d7816114b9565b9050919050565b60006020820190506116f3600083018461161c565b92915050565b60006101008201905061170f600083018b61161c565b61171c602083018a611364565b611729604083018961161c565b818103606083015261173b818861145d565b905061174a608083018761161c565b61175760a0830186611415565b61176460c083018561161c565b81810360e08301526117768184611519565b90509998505050505050505050565b600061178f6117a0565b905061179b82826119a4565b919050565b6000604051905090565b600067ffffffffffffffff8211156117c5576117c4611ada565b5b6117ce82611b31565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061184c82611914565b915061185783611914565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561188c5761188b611a1e565b5b828201905092915050565b60006118a2826118f4565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60008190506118ef82611bba565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611929826118e1565b9050919050565b82818337600083830152505050565b60005b8381101561195d578082015181840152602081019050611942565b8381111561196c576000848401525b50505050565b6000600282049050600182168061198a57607f821691505b6020821081141561199e5761199d611a7c565b5b50919050565b6119ad82611b31565b810181811067ffffffffffffffff821117156119cc576119cb611ada565b5b80604052505050565b60006119e082611914565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611a1357611a12611a1e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60028110611bcb57611bca611a4d565b5b50565b611bd781611897565b8114611be257600080fd5b50565b611bee816118b5565b8114611bf957600080fd5b50565b60028110611c0957600080fd5b50565b611c1581611914565b8114611c2057600080fd5b5056fea26469706673582212207d46a8ce617ce3376871d9a336fc0f34021adc056ca13eae6cd61d4da072270864736f6c63430008070033";

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
