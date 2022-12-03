<template>
  <div class="container-body">
    <nav class="navbar" id="nav">
      <img src="../assets/css/img/ed.png " />
      <form class="d-flex" role="search" id="sear">
        
        <input
          class="form-control" v-model="search" @keyup="filtrar"
          type="search"
          placeholder="Find something..." aria-label="Search"
        />
        <button class="btn" type="submit" @click="filtrar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"  
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </button>

      </form>

      <router-link to="/">
        <button>login</button>
      </router-link>
    </nav>

    <div class="container-main">
      <aside>
        <div id="student">
          <span>
            <router-link to="/student" id="teacher"> Students </router-link>
          </span>
          <span>
            <router-link to="" id="teacher"> notas </router-link>
          </span>
        </div>
      </aside>

      <main>
        <div class="main">
          <h3>student</h3>
          <div class="contenido_table">
            <table class="table table-striped table-hover">
              <thead>
                <tr id="tab">
                  <th scope="col">name</th>
                  <th scope="col">apellido</th>
                  <th scope="col">dni</th>
                  <th scope="col">email</th>
                  <th scope="col">address</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in mostrar_datos" id="table">
                  <th>{{ p.name }}</th>
                  <td>{{ p.apellido }}</td>
                  <td>{{ p.dni }}</td>
                  <td>{{ p.email }}</td>
                  <td>{{ p.addres }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#modal_editar"
                    >
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button
                      type="button"
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#modal_eliminar"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>

    <div
        class="modal fade"
        id="modal_editar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">EDITAR</h1>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body">
            <form>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">name</label>
                <input
                    v-model="mostrar_datos.name"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >apellido</label
                >
                <input
                    v-model="mostrar_datos.apellido"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">dni</label>
                <input
                    v-model="mostrar_datos.dni"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <input
                    v-model="mostrar_datos.email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">addres</label>
                <input
                    v-model="mostrar_datos.addres"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                </div>
            </form>
            </div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary">
                editar
            </button>
            </div>
        </div>
        </div>
    </div>
    <!-- Modal -->
    <div
        class="modal fade"
        id="modal_eliminar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">eliminar</h1>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>
            <div class="modal-body"><h4>¿deseas eliminar este studiante?</h4></div>
            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Close
            </button>
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary">
                eliminar
            </button>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
@import "../assets/css/stylestudent.css";
</style>

<script>
export default {
  data() {
    return {
      lista_productos: [],
      mostrar_datos: [],
      search: "",
    };
  },
  mounted() {},

  created() {
    this.lista_productos = [
      {
        name: "Juan ",
        apellido: "Cruz",
        dni:  1003805321,
        email: "jcruzquiroga1228@gmail.com",
        addres: "ciudadela",
      },
      {
        name: "Andres ",
        apellido: "nuñes",
        dni: 1001245789,
        email: "nuñes124@gmail.com",
        addres: "palo horcado",
      },
      {
        name: "jessica",
        apellido: "perez",
        dni: 1014551123,
        email: "perez121@gmail.com",
        addres: "lenin",
      },
      {
        name: "andrea",
        apellido: "zapata",
        dni: 10057887421,
        email: "zapata1452@gmail.com",
        addres: "juanXXIII",
      },
      {
        name: "yuliana",
        apellido: "quiroz",
        dni: 10124453223,
        email: "quirozyuli145@gmail.com",
        addres: "malvinas",
      },
    ];
    this.mostrar_datos = this.lista_productos;
  },

  methods: {
    insertar(codigo_buscar) {
      let item = this.mostrar_prod.find((pro) => pro.name == codigo_buscar);

      let encontrado = this.mostrar_datos.find((pro) => pro.name == item.name);

      if (encontrado == undefined) {
        item.cantidad = 1;
        item.seleccionado = true;
      }
    },

    filtrar() {
      this.mostrar_datos = this.lista_productos.filter(
        (pro) =>
          (pro.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) |
          (pro.dni.toString().indexOf(this.search) > -1)
      );
    },
  },
};
</script>