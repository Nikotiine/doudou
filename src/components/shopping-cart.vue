<template>
  <div class="raw justifCenter">
    <div>
      <table>
        <thead>
          <tr>
            <th>nom du produit</th>
            <th>quantite</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in costumerCart" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <form action="">
        <fieldset class="flexCollum itemsCenter">
          <legend>Vos Coordonees</legend>
          <label for="userLastName">Nom</label>
          <input type="text" name="userLastName" id="userLastName" />
          <label for="userName">Prenom</label>
          <input type="text" name="userName" id="UserName" />
          <label for="adresse">Votre adresse</label>
          <input type="text" name="adresse" id="adresse" />
          <label for="zipCode">Code postal</label>
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            min="1"
            max="96000"
          />
          <label for="city">Ville</label>
          <input type="text" name="city" id="city" />
          <label for="contactMail">votre mail</label>
          <input type="email" name="contactMail" id="contactMail" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping",
  data() {},
  computed: {
    costumerCart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.flexCollum {
  display: flex;
  flex-direction: column;
}
.justifCenter {
  justify-items: center;
  justify-content: center;
}
.itemsCenter {
  align-content: center;
  align-items: center;
}
.margin-10 {
  margin: 10px;
}
.raw {
  display: flex;
  flex-direction: row;
}
</style>
