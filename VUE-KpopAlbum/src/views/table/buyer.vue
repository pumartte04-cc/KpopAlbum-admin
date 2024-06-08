<template>
    <div class='app-container'>
      <el-form :model="tableForm" ref="tableForm" class="demo-ruleForm">
        <el-table :data="tableForm.tableData" border>

          <el-table-column prop="buyerName" label="Buyer Name">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.buyerName'" :rules="{required: true, message: 'Name cannot be NULL!',trigger: 'blur'}">
                <el-input v-model="scope.row.buyerName" placeholder="buyerName" clearable></el-input>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="albumName" label="Album Name">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.albumName'" :rules="{required: true, message: 'Name cannot be NULL!',trigger: 'change'}">
                <el-select clearable v-model="scope.row.albumName" filterable placeholder="Choose the album!">
                  <el-option v-for="item in albumTypeList" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="num" label="Quantity Purchased">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.num'" :rules="{required: true, message: 'Quantity cannot be NULL!',trigger: 'change'}">
                <el-select clearable v-model="scope.row.num" filterable placeholder="Choose the Quantity(<10 each)!">
                  <el-option v-for="item in num" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="purchaseDate" label="PurchaseDate" >
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.purchaseDate'" :rules="{required: true, message: 'Purchase Date cannot be NULL',trigger: 'blur'}">
                <el-date-picker v-model="scope.row.purchaseDate" type="date"  value-format="yyyy-MM-dd" placeholder="Choose the Purchase Date"></el-date-picker>
              </el-form-item>
            </template>
          </el-table-column>

          <el-table-column prop="contact" label="Contact Details">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.contact'" :rules="{required: true, message: 'Contact cannot be NULL!',trigger: 'blur'}">
                <el-input v-model="scope.row.contact" placeholder="Enter the contact details" clearable></el-input>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="location" label="Location">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.location'" :rules="{required: true, message: 'Location cannot be NULL!',trigger: 'blur'}">
                <el-input v-model="scope.row.location" placeholder="Enter the Location" clearable></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <br><br>
      <div style="text-align: center;">
        <el-button type="primary" @click="submitForm('tableForm')">Submit</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "index",
    data(){
      return{
        //
        albumTypeList:[
          {id: '1',value:'BLOSSOM (mars ver)'},
          {id: '2',value:'BLOSSOM (popcorn ver)'},
          {id: '3',value:'Empathy'},
          {id: '4',value:'기대'},
          {id: '5',value:'Delight (Random Ver)'},
          {id: '6',value:'Delight (Chemistry Ver)'},
          {id: '7',value:'EXIST Ramdom.Ver (Photo Book Ver)'},
          {id: '8',value:'EXIST Ramdom.Ver (Digipack Ver)'},
          {id: '9',value:'EXIST Ramdom.Ver (Smini Ver)'},
          {id: '10',value:'The Winning (Special Ver)'},
          {id: '10',value:'The Winning (Uwin Ver)'},
          {id: '10',value:'The Winning (Iwin Ver)'},
          {id: '11',value:'Marie claire'},
          {id: '12',value:'ELLE'},
          {id: '13',value:'The Golden Hor'},
        ],
        num:[
          {id: '1',value:'1'},
          {id: '2',value:'2'},
          {id: '3',value:'3'},
          {id: '4',value:'4'},
          {id: '5',value:'5'},
          {id: '6',value:'6'},
          {id: '7',value:'7'},
          {id: '8',value:'8'},
          {id: '9',value:'9'},
          {id: '10',value:'10'},
        ],
        tableForm:{
          tableData:[
            {
              buyerName:'임선화ᐜ',
              albumName:'4',
              num:'5',
              purchaseDate:'2024-05-23',
              contact:'+8612345678901',
              location:'...Wenzhou Zhejiang'
            },
            {
              buyerName:'Renee',
              albumName:'7',
              num:'1',
              purchaseDate:'2024-05-07',
              contact:'123456@gmail.com',
              location:'...Johen Australia'
            },
            {
              buyerName:'',
              albumName:'',
              num:'',
              purchaseDate:'',
              contact:'',
              location:''
            }
          ]
        }
      }
    },
    methods:{
      submitForm(tableForm){
        this.$refs['tableForm'].validate((valid) => {
          if (valid) {
            this.$message({message: "Submit Successful", type: 'success'})
            this.tableForm.tableData.push({
              albumType: '',
              artist:'',
              preSaleTime: '',
              price:'',
              Num:''
            });
          } else {
            return false;
          }
        })
      }
    }
  }
  </script>
  
  