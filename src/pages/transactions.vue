<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h2 class="text-h4">Pirate Transactions</h2>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-btn large color="primary" class="mt-2">
              <v-icon size="24" left>mdi-format-list-bulleted</v-icon>
              Download CSV
              <!-- FILENAME: realSatoshi - LocalPirate ARRR Transactions - Mon Aug 17 2020 03_40_17 GMT-0700 (Pacific Daylight Time) -->
            </v-btn>
            <v-alert text type="info" border="left" class="mt-3">
              <template v-slot:prepend>
                <v-icon color="info" class="ml-2 mr-4">mdi-information-outline</v-icon>
              </template>
              <i>Tip: Transactions take some time to complete.</i>
              <span>If you can see a transaction ID with a link to the blockchain explorer in the description, it means that your transaction has successfully been broadcast. Please make sure that your wallet is fully synchronized and that you are using the latest version of the Coffer wallet</span>
            </v-alert>
            <v-data-table
              id="transactions-table"
              v-if="transactions.length"
              :headers="headers"
              :items="transactions"
              :hide-default-footer="transactions.length <= 5"
              :items-per-page="5"
              flat
              @click:row="clickRow"
              >
              <!-- <template v-slot:item="{ item }"></template> -->
              <template v-slot:item.side="{ value }">
                <v-icon v-if="value === 'buy'" color="success">mdi-plus</v-icon>
                <v-icon v-else color="error">mdi-minus</v-icon>
              </template>
              <template v-slot:item.description="{ item }">
                <span v-if="item.side === 'sell'">Pirate reserve for trade&nbsp;</span>
                <span v-else>Pirate reserve return from trade&nbsp;</span>
                {{ item.txid }}
              </template>
            </v-data-table>
            <div v-else>You have not made any transactions yet</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TransactionsPage',
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
      this.$router.push(`/tx/${item.txid}`)
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
