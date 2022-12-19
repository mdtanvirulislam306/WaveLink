<template>
    <div class="nk-content">
                <div class="container">
                 <div class="nk-content-inner">
                  <div class="nk-content-body">
                   <div class="nk-block-head">
                    <div class="nk-block-head-between flex-wrap gap g-2">
                     <div class="nk-block-head-content">
                      <h2 class="nk-block-title"> Customer List </h2>
                       <nav>
                        <ol class="breadcrumb breadcrumb-arrow mb-0">
                         <li class="breadcrumb-item">
                          <a href="#">Home</a>
                         </li>
                         <li class="breadcrumb-item">
                          <a href="#">Customer</a>
                         </li>
                         <li class="breadcrumb-item active" aria-current="page">Customer List</li>
                        </ol>
                       </nav>
                     </div>
                     <div class="nk-block-head-conSPenSP">
                      <ul class="d-flex">
                       <li>
                        <a href="add-product.html" class="btn btn-primary btn-md d-md-none">
                         <em class="icon ni ni-plus"></em>
                         <span>Add</span>
                        </a>
                       </li>
                       <li>
                        <router-link to="/itorderadd" class="btn btn-primary d-none d-md-inline-flex">
                         <em class="icon ni ni-plus"></em>
                         <span>Add Customer</span>
                        </router-link>
                       </li>
                      </ul>
                     </div>
                    </div>
                   </div>
                   <div class="nk-block">
                    <div class="card">
                     <table class="datatable-init table" data-nk-container="table-responsive">
                      <thead class="table-light">
                       <tr>
                        <th class="tb-col tb-col-check" data-sortable="false">
                         <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" @click="isSelect">
                         </div>
                        </th>
                        <th class="tb-col">
                         <span class="overline-title">Picture</span>
                        </th>
                        <th class="tb-col tb-col-md">
                         <span class="overline-title">Name</span>
                        </th>
                        <th class="tb-col">
                         <span class="overline-title">Email</span>
                        </th>
                        <th class="tb-col tb-col-md">
                         <span class="overline-title">Number</span>
                        </th>
                        <th class="tb-col tb-col-md">
                         <span class="overline-title">Location</span>
                        </th>
                        <th class="tb-col">
                         <span class="overline-title">DB</span>
                        </th>
                        <th class="tb-col tb-col-end" data-sortable="false">
                         <span class="overline-title">action</span>
                        </th>
                       </tr>
                      </thead>
                      <tbody>
                       <tr v-for="(data) in customers" :key="data">
                        <td class="tb-col tb-col-check">
                         <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="pid1">
                         </div>
                        </td>
                        <td class="tb-col">
                         <div class="media-group">
                          <div class="media media-md media-middle">
                           <img src="{{ data.picture.thumbnail }}" alt="customer">
                          </div>
                          <div class="media-text">
                           <a href="edit-product.html" class="title">Pink Fitness Tracker</a>
                          </div>
                         </div>
                        </td>
                        <td class="tb-col tb-col-md">
                         <span>0533009</span>
                        </td>
                        <td class="tb-col">
                         <span>42</span>
                        </td>
                        <td class="tb-col tb-col-md">
                         <span>$126.00</span>
                        </td>
                        <td class="tb-col tb-col-md">
                         <ul class="rating">
                          <li class="rating-label checked">
                           <em class="icon ni ni-star-fill"></em>
                          </li>
                          <li class="rating-label checked">
                           <em class="icon ni ni-star-fill"></em>
                          </li>
                          <li class="rating-label checked">
                           <em class="icon ni ni-star-fill"></em>
                          </li>
                          <li class="rating-label checked">
                           <em class="icon ni ni-star-fill"></em>
                          </li>
                          <li class="rating-label checked">
                           <em class="icon ni ni-star-fill"></em>
                          </li>
                         </ul>
                        </td>
                        <td class="tb-col">
                         <span class="badge text-bg-success-soft">Published</span>
                        </td>
                        <td class="tb-col tb-col-end">
                         <div class="dropdown">
                          <a href="#" class="btn btn-sm btn-icon btn-zoom me-n1" data-bs-toggle="dropdown">
                           <em class="icon ni ni-more-v"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                           <div class="dropdown-content py-1">
                            <ul class="link-list link-list-hover-bg-primary link-list-md">
                             <li>
                              <a href="edit-product.html">
                               <em class="icon ni ni-edit"></em>
                               <span>Edit</span>
                              </a>
                             </li>
                             <li>
                              <a href="#" class="eg-swal-confirm-button">
                               <em class="icon ni ni-trash"></em>
                               <span>Delete</span>
                              </a>
                             </li>
                             <li>
                              <a href="products.html">
                               <em class="icon ni ni-eye"></em>
                               <span>View Details</span>
                              </a>
                             </li>
                            </ul>
                           </div>
                          </div>
                         </div>
                        </td>
                       </tr>
                      </tbody>
                     </table>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
    </template>
    <script>
    export default {
        data(){
            return{
                customers:[] 
            }
        },
        created(){
            this.$http.get('https://randomuser.me/api/').then(response => {
                this.customers = response.body.results;
                console.log(this.customers);
                
            }, response => {
                // error callback
            })
        }
    }
    </script>