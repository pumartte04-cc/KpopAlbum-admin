<template>


    <div class='app-container'>
      <el-form :model="tableForm" ref="tableForm" class="demo-ruleForm">
        <el-table :data="tableForm.tableData" border>
  
          <el-table-column prop="albumType" label="AlbumType">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.albumType'" :rules="{required: true, message: 'Album Type cannot be NULL!',trigger: 'change'}">
                <el-select clearable v-model="scope.row.albumType" filterable placeholder="Choose the album Type!">
                  <el-option v-for="item in albumTypeList" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="artist" label="Artist">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.artist'" :rules="{required: true, message: 'Artist cannot be NULL!',trigger: 'change'}">
                <el-select clearable v-model="scope.row.artist" filterable placeholder="Choose the Artist!">
                  <el-option v-for="item in artistList" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="pre-saleTime" label="pre-sale Date" >
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.preSaleTime'" :rules="{required: true, message: 'pre-sale Date cannnot be NULL',trigger: 'blur'}">
                <el-date-picker v-model="scope.row.preSaleTime" type="date"  value-format="yyyy-MM-dd" placeholder="Choose the pre-sale Date"></el-date-picker>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="price" label="Price /USD">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.price'" :rules="{required: true, message: 'Price cannot be NULL!',trigger: 'blur'}">
                <el-input v-model="scope.row.price" placeholder="Enter the Price" clearable></el-input>
              </el-form-item>
            </template>
          </el-table-column>
  
          <el-table-column prop="num" label="Number">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.num'">
                <el-input v-model="scope.row.Num" placeholder="Enter the Number of albums sold" clearable></el-input>
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
        artistList:[
          {id: '1',value:'BAEKHYUN'},
          {id: '2',value:'D.O.'},
          {id: '3',value:'EXO'},
          {id: '4',value:'IU'}
        ],
        tableForm:{
          tableData:[
            {
              albumType: '1',
              artist:'2',
              preSaleTime: '2024-05-07',
              price:'$12.33',
              Num:'unlimited'
            },
            {
              albumType: '2',
              artist:'2',
              preSaleTime: '2024-05-07',
              price:'$12.33',
              Num:'unlimited'
            },
            {
              albumType: '5',
              artist:'1',
              preSaleTime: '2024-05-07',
              price:'$12.33',
              Num:'unlimited'
            },
            {
              albumType: '',
              artist:'',
              preSaleTime: '',
              price:'',
              Num:''
            },
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
  
  