<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h2 class="text-h4">Send Pirate</h2>
            <h3 class="text-h5 mt-3">You can send up to 0.493646668125 ARRR</h3>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row no-gutters>
              <v-col>
                <v-checkbox v-model="altWithdraw" hide-details>
                  <template v-slot:label>
                    <span class="body-2">
                      I want to withdraw to a BTC, ETH, LTC, BCH or DASH wallet&nbsp;
                      (powered by <a @click.stop="" href="https://morphtoken.com" target="_blank">MorphToken</a>) [&nbsp;<a href="/faq" target="_blank" @click.stop="">How does this work?</a>&nbsp;]
                    </span>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Receiving Pirate Address"
                  hint="Only valid Pirate addresses accepted"
                  persistent-hint
                ></v-text-field>
              </v-col>
            </v-row>
            <div v-if="localTx">
              <v-row no-gutters>
                <v-col class="title success--text">
                  LocalCrypto Wallet Address
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col sm="7">
                  <v-text-field
                    label="Receive amount in Pirate"
                    hint="This is the amount of Pirate to be transferred to the other LocalCrypto wallet."
                    persistent-hint
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <v-row>
                <v-col sm="7">
                  <v-text-field
                    label="Receive amount in Pirate"
                    hint="This is the amount of Pirate to be received on the receiving Pirate address."
                    persistent-hint
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="7">
                  <v-text-field
                    label="Amount to be deducted in Pirate"
                    hint="This is the estimated amount of ARRR to be deducted from your LocalPirate Pirate wallet to cover the Pirate transaction network fee."
                    persistent-hint
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-radio-group v-model="feeType">
                    <v-radio color="green" :label="`Standard (fee: ${standardFee} ARRR)`"></v-radio>
                    <v-radio color="green" :label="`Low (fee: ${lowFee} ARRR)`"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row class="grey--text text--lighten-2">
                <v-col>
                  <div>Network transaction fee: 0.000161437500 ARRR</div>
                  <v-btn text color="primary" class="mt-2">All Available Balance</v-btn>
                </v-col>
              </v-row>
            </div>
            <v-row>
              <v-col>
                <v-dialog v-model="continueDialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn large color="primary" class="mt-2" v-on="on">
                      <v-icon size="24" left>mdi-wallet</v-icon>
                      Continue
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">
                      Confirm withdrawal
                    </v-card-title>
                    <v-card-text>
                      Please verify that the following information is correct and enter your password to confirm
                      Receiving address: 4BSX2ParTcSAa95icibdw4UyAbyWGnKd7YoNeHTcKfW34FUxeufGjXFiQmvLce6TCw2PbCackJ2gQabQJnFGc6XvAnQd8MBWTwfJbd77Gw
                      Amount to send: 0.493646668125 ARRR
                      <v-text-field
                        label="Password"
                        hint="Please enter your current password to proceed. 8-72 characters."
                        persistent-hint
                      ></v-text-field>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="continueDialog = false">
                        Back
                      </v-btn>
                      <v-btn color="primary" text @click="sendPirate">
                        Send Pirate
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
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
