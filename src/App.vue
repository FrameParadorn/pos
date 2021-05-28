<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img :src="card.src" class="white--text align-end" height="200px">
            </v-img>

            <v-card-actions>
              <v-row>
                <v-col>
                  <span>100 บาท </span>
                </v-col>
                <v-col>
                  <v-btn color="orange" class="ml-3" @click="send">
                    ซื้อ
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    send: function() {
      this.$liff
        .sendMessages("สั่ง นมสด 100 บาท")
        .then(() => {
          this.$liff.closeWindow();
        })
        .catch((err) => {
          console.error(err.code, err.message);
        });
    },
  },
  beforeCreate() {
    this.$liff.init(
      { liffId: "1656018498-mlPeZyAE" },
      () => {},
      (err) => console.error(err.code, err.message),
    );
  },
  data: () => ({
    cards: [
      {
        title: "Favorite road trips",
        src: "https://source.unsplash.com/1600x900/?food",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://source.unsplash.com/1600x900/?food2",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://source.unsplash.com/1600x900/?food3",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://source.unsplash.com/1600x900/?food4",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://source.unsplash.com/1600x900/?food5",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://source.unsplash.com/1600x900/?food6",
        flex: 6,
      },
    ],
  }),
};
</script>
