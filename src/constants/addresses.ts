//From UNI
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const WETH_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [SupportedChainId.GOERLI]: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
}



export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const OTOMEE_REGISTRY_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xa5409ec958c83c3f309868babaca7c86dcb077c1', //OS Registry. CHANGE!
  [SupportedChainId.GOERLI]: '0x30caa00562AD2f2B41BB4b1943d28F84832ce0D6', //TODO: Migrate to Stateswap
}

export const OTOMEE_EXCHANGE_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xb020e4899a06Bda2D4dC010C6c23cfcC1e75b307', //UNDEFINED UNTIL DEPLOYED!
  [SupportedChainId.GOERLI]: '0xF40D3F036528Ed87b83748306c719757f22be4fE', //TODO: Migrate to Stateswap
}

export const OTOMEE_ATOMIZICER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x4f1e8f81e21Fd54CeFDEC1aAe7f328E950b31A09', //UNDEFINED UNTIL DEPLOYED!
  [SupportedChainId.GOERLI]: '0x4f1e8f81e21Fd54CeFDEC1aAe7f328E950b31A09', //TODO: Migrate to Stateswap
}

export const OTOMEE_STATIC_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x31c8b26B5eF7E10C001aD35eADc33ea771819978', //UNDEFINED UNTIL DEPLOYED!
  [SupportedChainId.GOERLI]: '0x31c8b26B5eF7E10C001aD35eADc33ea771819978', //TODO: Migrate to Stateswap
}

export const MULTICALL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [SupportedChainId.GOERLI]: '0x1F98415757620B543A52E61c46B32eB19261F984',
}

export const OPENSEA_SHARED_STOREFRONT_ADDRESS = '0x495f947276749Ce646f68AC8c248420045cb7b5e'