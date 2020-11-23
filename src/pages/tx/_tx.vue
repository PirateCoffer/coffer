<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-alert type="info" border="left" class="" width="100%">
          This transaction is still pending.
        </v-alert>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" sm="7">
              <v-card class="fill-height">
                <v-card-text class="fill-height">
                  <v-row class="subtitle-1 fill-height">
                    <v-col cols="4" class="fill-height">
                      <v-list dense class="d-flex flex-column align-end">
                        <v-list-item>TX ID:</v-list-item>
                        <v-list-item>Other ID:</v-list-item>
                        <v-list-item>Amount:</v-list-item>
                      </v-list>
                    </v-col>
                    <v-col cols="8">
                      <v-list dense>
                        <v-list-item>
                          <span class="body-2 yellow--text text--darken-3 text-truncate">{{tx.id}}</span>
                        </v-list-item>
                        <v-list-item>
                          <span class="body-2 green--text text--darken-3 text-truncate">
                            {{$store.state.wallet.address.pirate}}
                          </span>
                        </v-list-item>
                        <v-list-item>
                          <span class="subtitle-1 orange--text text--darken-3">
                            {{$store.state.wallet.balance.pirate | number}}
                          </span>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <!-- <v-btn x-large block class="mt-3 primary"><v-icon left>mdi-pencil</v-icon>Edit Ad</v-btn> -->
            </v-col>
            <v-col cols="12" sm="5">
              <v-card>
                <v-card-title>
                  <v-icon left color="primary">mdi-seal-variant</v-icon>
                  Transaction Status
                </v-card-title>
                <v-card-text>
                  <v-alert
                    color="green"
                    prominent
                    outlined
                    shaped
                    >
                    <div class="text-h5">Completed</div>
                    <div class="body-2 yellow--text text--darken-3">Transaction has been completed</div>
                    <div class="body-2 grey--text">{{Date.now() | datetime}}</div>
                    <template v-slot:prepend>
                      <v-icon x-large color="green" class="mr-3">mdi-check-circle</v-icon>
                    </template>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'TxDetailPage',
  data: () => ({
    crumbs: [
      {
        text: 'Buy XMR for USD',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'United States of America',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Cash App (Square Cash)',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Buy Monero using Cash App (Square Cash) with US Dollar (USD)',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
  methods: {
  },
  asyncData({ params, store, app, error }) {
    let tx = { id: params.tx, to: params.tx }
    return { tx }
  },
}
</script>

<style lang="stylus">
.v-breadcrumbs li
  a
    color #ffffff80
    text-decoration underline
  .v-breadcrumbs__item--disabled
    text-decoration none
</style>
