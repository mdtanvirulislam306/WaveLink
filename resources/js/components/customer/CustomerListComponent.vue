<template>
    <div class="nk-content">
        <div class="container">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <div class="nk-block-head">
                        <div class="nk-block-head-between flex-wrap gap g-2">
                            <div class="nk-block-head-content">
                                <h2 class="nk-block-title">Customer List</h2>
                                <nav>
                                    <ol
                                        class="breadcrumb breadcrumb-arrow mb-0"
                                    >
                                        <li class="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <a href="#">Customer</a>
                                        </li>
                                        <li
                                            class="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Customer List
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="nk-block-head-conSPenSP">
                                <ul class="d-flex">
                                    <li>
                                        <a
                                            href="add-product.html"
                                            class="btn btn-primary btn-md d-md-none"
                                        >
                                            <em class="icon ni ni-plus"></em>
                                            <span>Add</span>
                                        </a>
                                    </li>
                                    <li>
                                        <router-link
                                            to="/itorderadd"
                                            class="btn btn-primary d-none d-md-inline-flex"
                                        >
                                            <em class="icon ni ni-plus"></em>
                                            <span>Add Customer</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="nk-block">
                        <div class="card p-5">
                            <table
                                id="datatable"
                                class="table display nowrap table-bordered"
                                cellspacing="0"
                                style="width: 100%"
                            >
                                <thead class="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Number</th>
                                        <th>Location</th>
                                        <th>DB</th>
                                        <th>DB</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";

export default {
    data() {
        return {
            customers: [],
        };
    },
    created() {
        this.$http.get("https://dummyjson.com/users").then(
            (response) => {
                //this.customers = response.body.users;
                console.log(this.customers);
                $("#datatable").DataTable({
                    dom: "Bfrtip",
                    responsive: true,
                    aLengthMenu: [
                        [25, 50, 100, 500, 5000, -1],
                        [25, 50, 100, 500, 5000, "All"],
                    ],
                    iDisplayLength: 25,
                    processing: true,
                    language: {
                        processing:
                            '<span style="color:#4eb9fa;"><i class=" mdi mdi-spin mdi-settings"></i> LOADING...</span>',
                    },
                    select: true,

                    buttons: ["colvis", "excelHtml5", "csv", "pdf", "print"],
                    data: response.body.users,
                    columns: [
                        { data: "firstName" },
                        { data: "email" },
                        { data: "phone" },
                        { data: "address.city" },
                        { data: "birthDate" },
                        { data: "birthDate" },
                    ],
                });
            },
            (response) => {
                // error callback
            }
        );
    },
};
</script>
