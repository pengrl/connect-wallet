/*
 * @Author: p彭 9878922+p-pengrulin@user.noreply.gitee.com
 * @Date: 2024-07-14 16:46:21
 * @LastEditors: p彭 9878922+p-pengrulin@user.noreply.gitee.com
 * @LastEditTime: 2024-07-15 07:36:17
 * @FilePath: \connect-wallet\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SolanaWallets from 'solana-wallets-vue'
import { UnsafeBurnerWalletAdapter, TrustWalletAdapter } from '@solana/wallet-adapter-wallets'
import 'solana-wallets-vue/styles.css'

const walletOptions = {
  wallets: [new TrustWalletAdapter(), new UnsafeBurnerWalletAdapter()]
}

createApp(App).use(SolanaWallets, walletOptions).use(router).mount('#app')
