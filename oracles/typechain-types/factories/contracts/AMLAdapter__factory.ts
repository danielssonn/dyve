/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AMLAdapter,
  AMLAdapterInterface,
} from "../../contracts/AMLAdapter";

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
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_result",
        type: "uint256",
      },
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jobId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
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
    inputs: [
      {
        internalType: "address",
        name: "checkThisAddress",
        type: "address",
      },
    ],
    name: "requestAMLChecks",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "result",
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
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_jobId",
        type: "string",
      },
    ],
    name: "setOracleJobId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "value",
        type: "bytes32",
      },
    ],
    name: "toString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016004553480156200001657600080fd5b50620000276200008660201b60201c565b6000600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060088190555067016345785d8a00006009819055506200020e565b6200012c73c89bd4e1632d3a43cb03aaad5262cbe4038bc57173ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b815260040160206040518083038186803b158015620000e557600080fd5b505afa158015620000fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000120919062000189565b6200012e60201b60201c565b565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000815190506200018381620001f4565b92915050565b600060208284031215620001a257620001a1620001ef565b5b6000620001b28482850162000172565b91505092915050565b6000620001c882620001cf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001ff81620001bb565b81146200020b57600080fd5b50565b611e09806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806371aad10d1161007157806371aad10d146101645780637420fab0146101945780637dc0d1d0146101c457806387da253d146101e2578063b11a19e8146101fe578063c2939d971461022e576100a9565b80634357855e146100ae5780634c69c00f146100ca57806356ca623e146100e657806365372147146101165780636900a3ae14610134575b600080fd5b6100c860048036038101906100c391906112af565b61024c565b005b6100e460048036038101906100df9190611228565b61035d565b005b61010060048036038101906100fb9190611228565b6103a1565b60405161010d9190611674565b60405180910390f35b61011e6103d2565b60405161012b91906116d6565b60405180910390f35b61014e60048036038101906101499190611381565b6103d8565b60405161015b9190611674565b60405180910390f35b61017e600480360381019061017991906112ef565b610409565b60405161018b9190611674565b60405180910390f35b6101ae60048036038101906101a99190611228565b610703565b6040516101bb9190611659565b60405180910390f35b6101cc6107c4565b6040516101d9919061157b565b60405180910390f35b6101fc60048036038101906101f79190611338565b6107ea565b005b61021860048036038101906102139190611282565b6107fc565b6040516102259190611674565b60405180910390f35b61023661082d565b6040516102439190611659565b60405180910390f35b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e5906116b6565b60405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281600681905550505050565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606103cb826040516020016103b791906114fe565b604051602081830303815290604052610409565b9050919050565b60065481565b6060610402826040516020016103ee9190611560565b604051602081830303815290604052610409565b9050919050565b606060006040518060400160405280601081526020017f303132333435363738396162636465660000000000000000000000000000000081525090506000600284516104559190611977565b600261046191906117b0565b67ffffffffffffffff81111561047a57610479611c6b565b5b6040519080825280601f01601f1916602001820160405280156104ac5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106104e4576104e3611c3c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061054857610547611c3c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060005b84518110156106f85782600486838151811061059957610598611c3c565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c60f81c60ff16815181106105df576105de611c3c565b5b602001015160f81c60f81b826002836105f89190611977565b600261060491906117b0565b8151811061061557610614611c3c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082600f60f81b86838151811061065d5761065c611c3c565b5b602001015160f81c60f81b1660f81c60ff16815181106106805761067f611c3c565b5b602001015160f81c60f81b826002836106999190611977565b60036106a591906117b0565b815181106106b6576106b5611c3c565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806106f090611b2c565b91505061057a565b508092505050919050565b60008061071a60085430634357855e60e01b610833565b905061078d6040518060400160405280600581526020017f636865636b00000000000000000000000000000000000000000000000000000081525061077d8560405160200161076991906114fe565b604051602081830303815290604052610409565b836108649092919063ffffffff16565b6107bc600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600954610897565b915050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107f381610963565b60088190555050565b6060610826826040516020016108129190611519565b604051602081830303815290604052610409565b9050919050565b60085481565b61083b61106d565b61084361106d565b61085a8585858461098d909392919063ffffffff16565b9150509392505050565b61087b828460800151610a3d90919063ffffffff16565b610892818460800151610a3d90919063ffffffff16565b505050565b60008060045490506001816108ac91906117b0565b6004819055506000634042994660e01b60008087600001513089604001518760018c60800151600001516040516024016108ed989796959493929190611596565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905061095886838684610a62565b925050509392505050565b60008082905060008151141561097f576000801b915050610988565b60208301519150505b919050565b61099561106d565b6109a58560800151610100610c06565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b610a4a8260038351610c70565b610a5d8183610df590919063ffffffff16565b505050565b60003084604051602001610a77929190611534565b604051602081830303815290604052805190602001209050846005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08685856040518463ffffffff1660e01b8152600401610b6d9392919061161b565b602060405180830381600087803b158015610b8757600080fd5b505af1158015610b9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbf9190611255565b610bfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf590611696565b60405180910390fd5b949350505050565b610c0e6110da565b6000602083610c1d9190611bad565b14610c4957602082610c2f9190611bad565b6020610c3b91906119d1565b82610c4691906117b0565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178167ffffffffffffffff1611610ca757610ca18160058460ff16901b60ff161784610e1790919063ffffffff16565b50610df0565b60ff8167ffffffffffffffff1611610cfd57610cd6601860058460ff16901b1784610e1790919063ffffffff16565b50610cf78167ffffffffffffffff16600185610e379092919063ffffffff16565b50610def565b61ffff8167ffffffffffffffff1611610d5457610d2d601960058460ff16901b1784610e1790919063ffffffff16565b50610d4e8167ffffffffffffffff16600285610e379092919063ffffffff16565b50610dee565b63ffffffff8167ffffffffffffffff1611610dad57610d86601a60058460ff16901b1784610e1790919063ffffffff16565b50610da78167ffffffffffffffff16600485610e379092919063ffffffff16565b50610ded565b610dca601b60058460ff16901b1784610e1790919063ffffffff16565b50610deb8167ffffffffffffffff16600885610e379092919063ffffffff16565b505b5b5b5b505050565b610dfd6110da565b610e0f83846000015151848551610e59565b905092915050565b610e1f6110da565b610e2f8384600001515184610f48565b905092915050565b610e3f6110da565b610e50848560000151518585610f9f565b90509392505050565b610e616110da565b8251821115610e6f57600080fd5b84602001518285610e8091906117b0565b1115610eb557610eb4856002610ea588602001518887610ea091906117b0565b61102d565b610eaf9190611977565b611049565b5b600080865180518760208301019350808887011115610ed45787860182525b60208701925050505b60208410610f1b5780518252602082610ef691906117b0565b9150602081610f0591906117b0565b9050602084610f1491906119d1565b9350610edd565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b610f506110da565b83602001518310610f7657610f758460028660200151610f709190611977565b611049565b5b8351805160208583010184815381861415610f92576001820183525b5050508390509392505050565b610fa76110da565b84602001518483610fb891906117b0565b1115610fe057610fdf8560028685610fd091906117b0565b610fda9190611977565b611049565b5b6000600183610100610ff29190611859565b610ffc91906119d1565b9050855183868201018583198251161781528151858801111561101f5784870182525b505085915050949350505050565b60008183111561103f57829050611043565b8190505b92915050565b60008260000151905061105c8383610c06565b506110678382610df5565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001600081526020016110d46110da565b81525090565b604051806040016040528060608152602001600081525090565b600061110761110284611716565b6116f1565b90508281526020810184848401111561112357611122611c9f565b5b61112e848285611ab9565b509392505050565b600061114961114484611747565b6116f1565b90508281526020810184848401111561116557611164611c9f565b5b611170848285611ab9565b509392505050565b60008135905061118781611d77565b92915050565b60008151905061119c81611d8e565b92915050565b6000813590506111b181611da5565b92915050565b600082601f8301126111cc576111cb611c9a565b5b81356111dc8482602086016110f4565b91505092915050565b600082601f8301126111fa576111f9611c9a565b5b813561120a848260208601611136565b91505092915050565b60008135905061122281611dbc565b92915050565b60006020828403121561123e5761123d611ca9565b5b600061124c84828501611178565b91505092915050565b60006020828403121561126b5761126a611ca9565b5b60006112798482850161118d565b91505092915050565b60006020828403121561129857611297611ca9565b5b60006112a6848285016111a2565b91505092915050565b600080604083850312156112c6576112c5611ca9565b5b60006112d4858286016111a2565b92505060206112e585828601611213565b9150509250929050565b60006020828403121561130557611304611ca9565b5b600082013567ffffffffffffffff81111561132357611322611ca4565b5b61132f848285016111b7565b91505092915050565b60006020828403121561134e5761134d611ca9565b5b600082013567ffffffffffffffff81111561136c5761136b611ca4565b5b611378848285016111e5565b91505092915050565b60006020828403121561139757611396611ca9565b5b60006113a584828501611213565b91505092915050565b6113b781611a05565b82525050565b6113ce6113c982611a05565b611b75565b82525050565b6113dd81611a23565b82525050565b6113f46113ef82611a23565b611b87565b82525050565b61140381611a2d565b82525050565b600061141482611778565b61141e818561178e565b935061142e818560208601611ac8565b61143781611cae565b840191505092915050565b61145361144e82611a83565b611b75565b82525050565b600061146482611783565b61146e818561179f565b935061147e818560208601611ac8565b61148781611cae565b840191505092915050565b600061149f60238361179f565b91506114aa82611cd9565b604082019050919050565b60006114c260288361179f565b91506114cd82611d28565b604082019050919050565b6114e181611a79565b82525050565b6114f86114f382611a79565b611ba3565b82525050565b600061150a82846113bd565b60148201915081905092915050565b600061152582846113e3565b60208201915081905092915050565b60006115408285611442565b60148201915061155082846114e7565b6020820191508190509392505050565b600061156c82846114e7565b60208201915081905092915050565b600060208201905061159060008301846113ae565b92915050565b6000610100820190506115ac600083018b6113ae565b6115b9602083018a6114d8565b6115c660408301896113d4565b6115d360608301886113ae565b6115e060808301876113fa565b6115ed60a08301866114d8565b6115fa60c08301856114d8565b81810360e083015261160c8184611409565b90509998505050505050505050565b600060608201905061163060008301866113ae565b61163d60208301856114d8565b818103604083015261164f8184611409565b9050949350505050565b600060208201905061166e60008301846113d4565b92915050565b6000602082019050818103600083015261168e8184611459565b905092915050565b600060208201905081810360008301526116af81611492565b9050919050565b600060208201905081810360008301526116cf816114b5565b9050919050565b60006020820190506116eb60008301846114d8565b92915050565b60006116fb61170c565b90506117078282611afb565b919050565b6000604051905090565b600067ffffffffffffffff82111561173157611730611c6b565b5b61173a82611cae565b9050602081019050919050565b600067ffffffffffffffff82111561176257611761611c6b565b5b61176b82611cae565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006117bb82611a79565b91506117c683611a79565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117fb576117fa611bde565b5b828201905092915050565b6000808291508390505b60018511156118505780860481111561182c5761182b611bde565b5b600185161561183b5780820291505b808102905061184985611ccc565b9450611810565b94509492505050565b600061186482611a79565b915061186f83611a79565b925061189c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846118a4565b905092915050565b6000826118b45760019050611970565b816118c25760009050611970565b81600181146118d857600281146118e257611911565b6001915050611970565b60ff8411156118f4576118f3611bde565b5b8360020a91508482111561190b5761190a611bde565b5b50611970565b5060208310610133831016604e8410600b84101617156119465782820a90508381111561194157611940611bde565b5b611970565b6119538484846001611806565b9250905081840481111561196a57611969611bde565b5b81810290505b9392505050565b600061198282611a79565b915061198d83611a79565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156119c6576119c5611bde565b5b828202905092915050565b60006119dc82611a79565b91506119e783611a79565b9250828210156119fa576119f9611bde565b5b828203905092915050565b6000611a1082611a59565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611a8e82611a95565b9050919050565b6000611aa082611aa7565b9050919050565b6000611ab282611a59565b9050919050565b82818337600083830152505050565b60005b83811015611ae6578082015181840152602081019050611acb565b83811115611af5576000848401525b50505050565b611b0482611cae565b810181811067ffffffffffffffff82111715611b2357611b22611c6b565b5b80604052505050565b6000611b3782611a79565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611b6a57611b69611bde565b5b600182019050919050565b6000611b8082611b91565b9050919050565b6000819050919050565b6000611b9c82611cbf565b9050919050565b6000819050919050565b6000611bb882611a79565b9150611bc383611a79565b925082611bd357611bd2611c0d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b60008160011c9050919050565b7f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160008201527f636c650000000000000000000000000000000000000000000000000000000000602082015250565b7f536f75726365206d75737420626520746865206f7261636c65206f662074686560008201527f2072657175657374000000000000000000000000000000000000000000000000602082015250565b611d8081611a05565b8114611d8b57600080fd5b50565b611d9781611a17565b8114611da257600080fd5b50565b611dae81611a23565b8114611db957600080fd5b50565b611dc581611a79565b8114611dd057600080fd5b5056fea2646970667358221220087c182e0fc19b593b5def4d8817ea0cd1481b9684038b053224a683557020dc64736f6c63430008070033";

type AMLAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMLAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMLAdapter__factory extends ContractFactory {
  constructor(...args: AMLAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AMLAdapter> {
    return super.deploy(overrides || {}) as Promise<AMLAdapter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AMLAdapter {
    return super.attach(address) as AMLAdapter;
  }
  override connect(signer: Signer): AMLAdapter__factory {
    return super.connect(signer) as AMLAdapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMLAdapterInterface {
    return new utils.Interface(_abi) as AMLAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AMLAdapter {
    return new Contract(address, _abi, signerOrProvider) as AMLAdapter;
  }
}
