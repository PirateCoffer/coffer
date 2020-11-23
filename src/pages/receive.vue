<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h2 class="text-h4">Receive Pirate</h2>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-checkbox v-model="altDeposit">
              <template v-slot:label>
                <span class="body-2">
                  I want to deposit from a BTC, ETH, LTC, BCH or DASH wallet&nbsp;
                  (powered by <a @click.stop="" href="https://morphtoken.com" target="_blank">MorphToken</a>) [&nbsp;<nuxt-link to="/faq">How does this work?</nuxt-link>&nbsp;]
                </span>
              </template>
            </v-checkbox>
            <div class="d-flex align-center">
              <v-btn large text class="mr-2">
                <v-icon size="28" left>mdi-qrcode-scan</v-icon>
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
              <div style="overflow-wrap: break-word; word-break: break-word">
                <span class="grey--text">Your&nbsp;deposit&nbsp;Pirate&nbsp;address:&nbsp;</span><span class="font-weight-medium" style="cursor: pointer" @click="copy">{{$store.state.wallet.address.pirate}}</span>&nbsp;
                <v-btn @click="copy" text color="primary">
                  <v-icon left>mdi-checkbox-multiple-blank-outline</v-icon>
                  Copy Address
                </v-btn>
              </div>
            </div>
            <div class="mt-4">
              Your pending deposits will be shown here
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Wallet',
  components: {
  },
  data: () => ({
    tab: null,
    feeType: 0,
    altDeposit: false,
    altWithdraw: false,
    continueDialog: false,
    headers: [
      { text: '', align: 'start', value: 'side', width: '5%' },
      { text: 'Date', width: '20%', align: 'start', value: 'date' },
      { text: 'Received ARRR', width: '20%', align: 'start', value: 'received' },
      { text: 'Sent ARRR', width: '15%', align: 'start', value: 'sent' },
      { text: 'Description', width: '40%', align: 'start', value: 'description', sortable: false },
    ],
    transactions: [
      { side: 'sell', date: '2020-08-09 7:02', received: '', sent: '0.214339299110', txid: '11dbc844-a534-4995-9bc8-44a534d9958d' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
      { side: 'buy', date: '2020-08-05 14:21', received: '0.109673173942', sent: '', txid: 'afb63694-5c93-4e29-b636-945c932e29fe' },
      { side: 'sell', date: '2020-08-05 14:10 ', received: '', sent: '0.205368035787', txid: '9064ff75-61ca-499f-a4ff-7561ca799f5f' },
    ],
  }),
  computed: {
    localTx () {
      return false
    },
    standardFee () {
      return '0.000109925000'
    },
    lowFee () {
      return '0.000027481250'
    },
  },
  created() {
  },
  mounted () {
  },
  methods: {
    async clickRow (item, row) {
      this.$router.push(`/trade/${item.txid}`)
    },
    async copy () {
      this.notify('Address copied to clipboard')
    },
    async sendPirate () {
      this.continueDialog = false
      this.notify('Sending Pirate')
    }
  },
}
</script>

<style lang="stylus">
#transactions-table tr
  cursor pointer
.wallet-content .v-expansion-panel-content__wrap
  padding 0
</style>
