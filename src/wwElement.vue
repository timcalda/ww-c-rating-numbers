<template>
  <div class="star-rating">
        <label class="star-rating__star" v-for="(rating,i) in ratings" :key="i" 
        :class="{
        'is-selected': ((value == rating) && value != null), 
        'is-disabled': disabled,
        'is-hovered': (hoverEffect && (temp_value == rating) && temp_value != null)
        }" v-on:click="setNewValue(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" v-model="value" :disabled="disabled">
        {{rating}}
        </label>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    content: { type: Object, required: true },
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },
  data() {
    return {
      rating: 3,
      temp_value: null,
    }
  },
  computed: {
    value: {
      get() {
        return this.rating
      },
      set(value) {
        this.rating = value
      }
    },
    ratings() {
      return this.content.ratings;
    },
    color() {
      return this.content.color;
    },
    backgroundColor() {
      return this.content.backgroundColor;
    },
    textColorSelected() {
      return this.content.textColorSelected;
    },
    textColorUnselected() {
      return this.content.textColorUnselected;
    },
    hoverColor() {
      return this.content.hoverColor;
    },
    hoverEffect() {
      return this.content.hoverEffect;
    },
  },
  methods: {
    star_over(index) {
      if (!this.disabled) {
        this.temp_value = index;
      }
    },
    star_out() {
      if (!this.disabled) {
        this.temp_value = null;
      }
    },
    setNewValue(value) {
      if (!this.disabled) {
        this.temp_value = null;
        this.$emit('trigger-event', { name: 'change', event: { domEvent: {}, value: value } })
        return this.value = value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
%visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px; width: 1px;
  margin: -1px; padding: 0; border: 0;
}

.star-rating {

  &__star {
    display: inline-flex;
    color: v-bind(textColorUnselected);
    transition: color 0.2s ease-out;
    background-color: v-bind(backgroundColor);
    border-radius: 8px;
    border: 1px solid #ecedff;
    width: 40px;
    height: 35px;
    margin: 4px;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    transition: background-color 300ms linear;

    &.is-hovered {
      cursor: pointer;
      background-color: v-bind(hoverColor);
    }
    
    
    &.is-selected {
      color: v-bind(textColorSelected);
      background-color: v-bind(color);
      border:none;
    }
    
    &.is-disabled:hover {
      cursor: default;
    }
  }

  &__checkbox {
    @extend %visually-hidden;
  }
}

</style>