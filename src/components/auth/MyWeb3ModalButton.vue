<template>
  <button ref="web3ModalButtonRef" :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig } from "@wagmi/core";
import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";

const chains = [arbitrum, mainnet, polygon];
const projectId = "d5dcae4b223356c9fc7b18d95f634f46";
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);

export default {
  name: "MyWeb3ModalButton",
  props: {
    buttonClass: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$refs.web3ModalButtonRef.addEventListener("click", () => {
      web3modal.openModal();
    });
  },
};
</script>
