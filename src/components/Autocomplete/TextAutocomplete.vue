<template>
  <v-autocomplete
    :items="items"
    v-model="item"
    :get-label="getLabel"
    :component-item="template"
    :auto-select-one-item="false"
    :keep-open="false"
    @change="$emit('onUpdateItems', $event)"
    @item-selected="$emit('onSelectedItem', $event)"
  ></v-autocomplete>
</template>

<script>
import ItemAutocomplete from './ItemAutocomplete'

export default {
  name: 'TextAutocomplete',
  props: {
    items: {
      type: Array,
      required: true
    },
    cleared: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      item: {},
      template: ItemAutocomplete
    }
  },
  methods: {
    getLabel(item) {
      if (item && item.name && item.name.length > 0) {
        return item.name
      }
      return undefined
    }
  },
  watch: {
    // clearing current item selected
    cleared(value) {
      if (value && this.item) {
        this.item = {}
      }
    }
  }
}
</script>
