<template>
<div class="container">
  THIS IS THE PARENT
  <example-nested />
</div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import ExampleNested from '@component/ExampleNested';

export default {
  components: {
    ExampleNested,
  },
};
</script>
