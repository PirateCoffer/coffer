<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-avatar color="black" size="36" class="mr-4">
              <img :src="repopath + '/media/images/pirate-logo.png'">
            </v-avatar>
            <span class="grey--text font-weight-medium">{{$store.state.wallet.balance.pirate | number}}</span>
            <span class="grey--text font-weight-light text-h6">&nbsp;ARRR</span>
            <v-spacer></v-spacer>
            <span class="grey--text font-weight-light">Price:</span>
            <span class="grey--text font-weight-medium">&nbsp;$0.42</span>
            <span class="grey--text font-weight-light text-h6">&nbsp;USD</span>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-sheet color="rgba(0, 0, 0, .09)">
            <v-sparkline
              :value="value"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
              >
              <template v-slot:label="item">
                ${{ item.value }}
              </template>
            </v-sparkline>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="200" color="teal" class="d-flex justify-center align-center" hover to="/send">
          <div class="text-h4">Send</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="200" color="amber darken-3" class="d-flex justify-center align-center" hover to="/receive">
          <div class="text-h4">Receive</div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card height="140" color="deep-purple darken-3" class="d-flex justify-center align-center" hover to="/transactions">
          <div class="text-h4">Transactions</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WalletDash',
  components: {
  },
  data: () => ({
    value: [
      0.09,
      0.12,
      0.17,
      0.26,
      0.35,
      0.42,
    ],
  }),
  methods: {
  },
}
</script>

<style lang="stylus">
</style>
