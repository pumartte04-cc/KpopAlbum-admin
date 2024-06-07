<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
    <el-form-item  label="Album name" prop="name" :rules="{required: true, message: 'Album name cannot be NULL!', trigger: 'change'}">
        <el-input v-model="form.name" :placeholder="'Enter Album name'" :clearable="true" :show-word-limit="true" required />
    </el-form-item>

      <el-form-item label="Artist Zone" prop="zone" :rules="{required: true, message: 'Artist cannot be NULL!', trigger: 'change'}">
        <el-select v-model="form.zone" placeholder="please select singer"  >
          <el-option label="Baekhyun" value="Baekhyun" />
          <el-option label="Hkyungsoo" value="D.O." />
          <el-option label="Chanyeol" value="Chanyeol" />
          <el-option label="EXO" value="EXO" />
          <el-option label="IU" value="IU"/>          
          <el-option label="babymonster" value="babymonster" />
        </el-select>
      </el-form-item>

      <el-form-item label="Issue Date" prop="date1" :rules="{required: true, message: 'Issue Date cannot be NULL!', trigger: 'change'}">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick the issue date" style="width: 100%;" />
        </el-col>
      </el-form-item>

      <el-form-item label="Timing or not" prop="delivery" :rules="{required: true, message: 'TIMING cannot be NULL!', trigger: 'change'}">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Album type" prop="type" :rules="{required: true, message: 'Album type cannot be NULL!', trigger: 'change'}">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="PB" name="type" />
          <el-checkbox label="D" name="type" />
          <el-checkbox label="Poster" name="type" />
          <el-checkbox label="Special" name="type" />
          <el-checkbox label="Smin" name="type" />
          <el-checkbox label="QR" name="type" />
          <el-checkbox label="KIT" name="type" />
          <el-checkbox label="JC" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources" prop="resource" :rules="{required: true, message: 'Resource cannot be NULL!', trigger: 'change'}">
        <el-radio-group v-model="form.resource">
          <el-radio label="ktown4u" />
          <el-radio label="makestar" />
          <el-radio label="movmake" />
          <el-radio label="一直娱" />
          <el-radio label="yetimall" />
          <el-radio label="熊宝" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Introduction" prop="intro">
        <el-input v-model="form.intro" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>

    </el-form>
  
    <el-table :data="tableData" style="width: 100%">  
      <el-table-column prop="name" label="Album name" ></el-table-column>  
      <el-table-column prop="zone" label="Artist Zone"></el-table-column>  
      <el-table-column prop="date1" label="Issue Date"></el-table-column>  
      <el-table-column prop="delivery" label="Timing or not">  
        <template slot-scope="scope">  
          <span>{{ scope.row.delivery ? 'Yes' : 'No' }}</span>  
        </template>  
      </el-table-column>  
      <el-table-column label="Album type"  prop="type">  
        <template slot-scope="scope">  
          <span>{{ scope.row.type.join(', ') }}</span>  
        </template>  
      </el-table-column>  
      <el-table-column prop="resource" label="Resources" ></el-table-column>
      <el-table-column prop="intro" label="Introduxtion" ></el-table-column>  
      <el-table-column label="Actions">
        <template slot-scope="scope">
          <el-button type="danger" @click="deleteRow(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table> 
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      form: {
        name:'',  
        zone: '',  
        date1: '',  
        delivery: false,  
        type: [],  
        resource: '',  
        intro: '', 
      },
      tableData:[],
    };
  },
  methods: {  
    onSubmit() {
  this.$refs.form.validate((valid) => {
    if (valid) {
      this.tableData.push(this.form);
      this.resetForm();
      
      this.$message.success('Form submitted successfully');
    } else {
      this.$message.error('Please fill out all fields');
    }
  });
  },  
  deleteRow(index) {
      this.tableData.splice(index, 1);
    },
  resetForm() {   
    this.$refs.form.clearValidate();
    this.form = {  
      name: '',  
      zone: '',  
      date1: '',  
      delivery: false,  
      type: [],  
      resource: '',  
      intro: '', 
    }; 
    this.$nextTick(() => {
        this.$refs.form.fields.forEach(field => {
            field.validateMessage = ''; 
        });
    }); 
  },  
  },  
};  
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

