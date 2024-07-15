<template>
  <wallet-modal-provider>
    <!-- 链接按钮 -->
    <template #default="{ openModal }">
      <div
        class="connect"
        @click="onClick(openModal)"
        @mouseenter="isEnter = true"
        @mouseleave="isEnter = false"
      >
        {{ content }}
      </div>
    </template>

    <!-- modal 模态框 -->
    <template #modal="{ closeModal }">
      <div class="modal-wrapper">
        <!-- 标题  -->
        <div class="modal-title">
          <div class="modal-close" @click="closeModal"></div>
        </div>

        <!-- 钱包列表 -->
        <!-- <ul class="modal-list">
          <li
            class="modal-item"
            v-for="(wallet, index) in wallets"
            :key="index"
            @click="handleConnect(wallet.adapter.name, closeModal)"
          >
            <p v-text="wallet.adapter.name"></p>
            <wallet-icon :wallet="wallet"></wallet-icon>
          </li>
        </ul> -->

        <!-- 钱包列表 -->
        <ul class="modal-list">
          <li
            class="modal-item"
            v-for="(wallet, index) in mapWallet"
            :key="index"
            @click="handleConnect(wallet.walletName, closeModal)"
          >
            <p v-text="wallet.name"></p>
            <img :src="wallet.icon" :alt="`${wallet.name} icon`" />
          </li>
        </ul>

        <!-- 底部信息 -->
        <div class="not-wallet">
          <img src="@/assets/wallet.png" alt="" style="width: 17px" />I don't have a wallet
        </div>
        <div class="info">
          By connecting your wallet you agree to the Terms of Service and Privacy Policy
        </div>
      </div>
    </template>
  </wallet-modal-provider>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { WalletName } from '@solana/wallet-adapter-base'
import { useWallet, WalletModalProvider, WalletIcon } from 'solana-wallets-vue'
import { mapWallet } from './wallet-data'

const {
  wallets,
  wallet,
  connect,
  connecting,
  connected,
  select,
  publicKey,
  disconnect,
  disconnecting
} = useWallet()

// 鼠标移入控制器
const isEnter = ref(false)

/**
 * @description: 地址相关
 */
const publicKeyBase58 = computed(() => publicKey.value?.toBase58())
const publicKeyTrimmed = computed(() => {
  if (!wallet.value || !publicKeyBase58.value) return null
  return publicKeyBase58.value.slice(0, 4) + '..' + publicKeyBase58.value.slice(-4)
})

/**
 * @description: connect按钮显示内容
 */
const content = computed(() => {
  if (connecting.value) return 'Connecting ...'
  if (disconnecting.value) return 'Disconnecting ...'
  if (connected.value && isEnter.value) return 'Disconnect'
  if (connected.value) return publicKeyTrimmed
  return 'Connect'
})

/**
 * @description: 点击某一个钱包进行连接
 */
const handleConnect = async (name: WalletName, close: () => void) => {
  select(name)
  await nextTick()
  connect().catch(() => {})
  close()
}

/**
 * @description: 连接按钮点击事件
 */
const onClick = (openModal: () => void) => {
  if (connected.value) return handleDisConnect()

  openModal()
}

/**
 * @description: 断开连接
 */
const handleDisConnect = () => {
  disconnect().catch(() => {})
}
</script>

<style scoped>
.connect {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  width: 140px;
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
  background: #fabd00;
  cursor: pointer;
}

.modal-wrapper {
  width: 390px;
  height: 495px;
  border-radius: 24px;
  background: #fff;
  z-index: 1000;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 39px 26px;
  box-sizing: border-box;
}

.modal-title {
  position: relative;
  height: 84px;
  width: 100%;
  background: url('@/assets/connect-by.png') no-repeat center;
  background-size: 193px 21px;
}

.modal-close {
  width: 12px;
  height: 12px;
  background: url('@/assets/close.png') no-repeat center;
  position: absolute;
  right: 0px;
  top: 34px;
  cursor: pointer;
}

.modal-list {
  margin: 0 0 12px 0;
  padding: 0;
  width: 100%;
  list-style: none;
  height: 291px;
}

.modal-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  width: 312px;
  height: 64px;
  font-size: 18px;
  margin-bottom: 12px;
  border-radius: 6px;
  background: #e6e6e6;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
}

.not-wallet {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 16px;
  width: 183px;
  justify-content: space-between;
  cursor: pointer;
}
.info {
  margin-top: 14px;
  color: #999;
  text-align: center;
  font-size: 14px;
}
</style>
