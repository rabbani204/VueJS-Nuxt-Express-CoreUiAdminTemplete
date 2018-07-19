<template>
  <div class="app flex-row align-items-center">
    <div class="container">
        <div class="center">
            <h1 class="centerf">Add new Supplier</h1>
            <p class="text-muted">Fill all fields</p>
        </div>
        <!-- <form method="post" action="/supplier/add"> -->
        <form>
          <b-row class="justify-content-center">
            <b-col md="6" sm="8">
              <b-card no-body class="mx-4">
                <b-card-body class="p-4">

                  <b-input-group class="mb-3" prepend="$">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-user"></i>
                      </span>
                    </div>
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="title" placeholder="Enter Supplier name" />
                  </b-input-group>

                  <b-input-group class="mb-3" prepend="Username">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="addressline1" placeholder="Enter Supplier Address Line 1">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="addressline2" placeholder="Enter Supplier Address Line 2">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="zip" placeholder="Enter Supplier Zip Code">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="city" placeholder="Enter Supplier City">
                  </b-input-group>

                  <b-input-group class="mb-4">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="state" placeholder="Enter Supplier State">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="country" placeholder="Enter Supplier Country">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="mobile" placeholder="Enter Supplier Contact Mobile">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="phone" placeholder="Enter Supplier Phone Number">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="fax" placeholder="Enter Supplier Fax number">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="email" placeholder="Enter Supplier Email">
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <!-- <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend> -->
                    <input type="text" class="form-control" v-model="website" placeholder="Enter Supplier Website">
                  </b-input-group>

                  
                  <!-- <div class="form-group">
                    <label for="exampleFormControlFile1">Item image</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div> -->
                  

                  <!-- <button variant="success" block>Add Supplier</button> -->
                  <button type="submit" class="btn btn-default" @submit.prevent="addSupplier">Add</button>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "supplieradd",
  layout: "",
  data() {
    return {
      title: "",
      addressline1: "",
      addressline2: "",
      zip: "",
      city: "",
      state: "",
      country: "",
      mobile: "",
      phone: "",
      fax: "",
      email: "",
      website: ""
    };
  },
  methods: {
    addJob() {
      // axios.post('/api/jobs', 'JobsController@store')
      console.log("AddJob Method called");
      axios.post("http://localhost:3000/api/users/addsupplier", {
        title: this.title,
        addressline1: this.addressline1,
        addressline2: this.addressline2,
        zip: this.zip,
        city: this.city,
        state: this.state,
        country: this.country,
        mobile: this.mobile,
        phone: this.phone,
        fax: this.fax,
        email: this.email,
        website: this.website
      });
    }
  }
};
</script>

<style>
.centerf {
  text-align: center !important;
}

.text-muted {
  text-align: center !important;
}
</style>
