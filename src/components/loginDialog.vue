<template>
    <v-dialog v-model="loginDialog" max-width="600">
      <v-card>
        <v-toolbar color="primary" dark
          >Login to your Offoce</v-toolbar
        >

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="amount"
                  :counter="50"
                  :rules="amountRules"
                  label="Amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-btn
                  :disabled="!valid"
                  color="secondary"
                  class="mr-4"
                  @click="submit"
                  :loading="loadingBtn"
                >
                  Allocate
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary1 darken-1" text @click="loginDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>