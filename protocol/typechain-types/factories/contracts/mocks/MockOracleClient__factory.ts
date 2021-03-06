/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockOracleClient,
  MockOracleClientInterface,
} from "../../../contracts/mocks/MockOracleClient";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
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
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "requestAMLCheck",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "requestEligibilityOffChain",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x6080604052600160045534801561001557600080fd5b5061003261002761003760201b60201c565b61003f60201b60201c565b610105565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61054f806101146000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632b8804c71461005c57806367f9eb8a1461008c578063715018a6146100bc5780638da5cb5b146100c6578063f2fde38b146100e4575b600080fd5b61007660048036038101906100719190610331565b610100565b60405161008391906103dd565b60405180910390f35b6100a660048036038101906100a19190610331565b610107565b6040516100b391906103dd565b60405180910390f35b6100c461010e565b005b6100ce610122565b6040516100db91906103c2565b60405180910390f35b6100fe60048036038101906100f99190610331565b61014c565b005b6000919050565b6000919050565b6101166101d0565b610120600061024e565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101546101d0565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156101c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bb906103f8565b60405180910390fd5b6101cd8161024e565b50565b6101d8610314565b73ffffffffffffffffffffffffffffffffffffffff166101f6610122565b73ffffffffffffffffffffffffffffffffffffffff161461024c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024390610418565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008135905061032b81610502565b92915050565b60006020828403121561034757610346610485565b5b60006103558482850161031c565b91505092915050565b61036781610449565b82525050565b6103768161045b565b82525050565b6000610389602683610438565b91506103948261048a565b604082019050919050565b60006103ac602083610438565b91506103b7826104d9565b602082019050919050565b60006020820190506103d7600083018461035e565b92915050565b60006020820190506103f2600083018461036d565b92915050565b600060208201905081810360008301526104118161037c565b9050919050565b600060208201905081810360008301526104318161039f565b9050919050565b600082825260208201905092915050565b600061045482610465565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b61050b81610449565b811461051657600080fd5b5056fea2646970667358221220dafdfd516705969e12d5984ec652e12e7da2426d5297332a368e78662633799f64736f6c63430008070033";

type MockOracleClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockOracleClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockOracleClient__factory extends ContractFactory {
  constructor(...args: MockOracleClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockOracleClient> {
    return super.deploy(overrides || {}) as Promise<MockOracleClient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockOracleClient {
    return super.attach(address) as MockOracleClient;
  }
  override connect(signer: Signer): MockOracleClient__factory {
    return super.connect(signer) as MockOracleClient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOracleClientInterface {
    return new utils.Interface(_abi) as MockOracleClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOracleClient {
    return new Contract(address, _abi, signerOrProvider) as MockOracleClient;
  }
}
