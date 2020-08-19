class Matrix {
    constructor(str) {
      // if(str.length === 1){
      //   this.val = str.split().map(v => (Number(v)))
      // }
      this.val = str
        .split('\n')
        .map(son => son
                        .split(' ')
                        .map(val => (Number(val))))      
    }
  
    rows(i) {
      return this.val
    }

    column(i) {
        let newArr = []
        this.val.map(v => (newArr.push(v[i])))
        return newArr
    }
  }
  
  console.log("dcfrvrv #####")
  var m = new Matrix('1')
  console.log(m.rows[0])
  console.log("2222 #####")
  console.log(m.column(0))
