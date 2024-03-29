import { Signature } from "ethers";
import { BytesLike } from "ethers/lib/utils";

export interface OrderInterface {
    expirationTime: number
    listingTime: number
    maker: string
    maximumFill: number
    registry: string
    salt: string
    verifierExtradata: string
    verifierSelector: string
    verifierTarget: string
}

export interface OrderWrapperInterface {
    call: CallInterface | undefined
    collection: string
    hash: string | undefined
    maker: string
    order: OrderInterface
    price: string
    signature: Signature | undefined
    target: string
    type: OrderType
}

export enum OrderType {
    ERC20_FOR_ERC721,
    ERC20_FOR_ERC1155,
    ERC721_FOR_ERC20,
    ERC1155_FOR_ERC20,
    ERC721_FOR_ETH,
    ERC1155_FOR_ETH,
    ERC721_FOR_ETH_OR_WETH,
    ERC1155_FOR_ETH_OR_WETH,
    UNDEFINED_TYPE
}

export interface CallInterface {
    data: BytesLike
    howToCall: number
    target: string
}