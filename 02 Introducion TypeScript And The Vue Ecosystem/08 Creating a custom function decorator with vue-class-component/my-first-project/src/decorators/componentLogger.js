/* This watcher will log the new and old values whenever it changes. 
This function will only be executed with a debug data set to true: */

export default {
  mounted() {
    if (this.debug) {
      const componentName = this.name || '';
      console.log(`The ${componentName} was mounted successfully.`);

      const dataKeys = Object.keys(this.$data);

      if (dataKeys.length) {
        console.log('The base data are:');
        console.table(dataKeys);

        dataKeys.forEach((key) => {
        this.$watch(key, (newValue, oldValue) => {
        console.log(`The new value for ${key} is: ${newValue}`);
        console.log(`The old value for ${key} is: ${oldValue}`);
      }, {
            deep: true,
          });
        });
      }
    }
  },
};
