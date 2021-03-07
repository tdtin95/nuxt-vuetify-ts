<template>
  <div>
    <v-menu
      ref="from"
      v-model="openCalendar"
      transition="scale-transition"
      absolute
      offset-y
      min-width="auto">

      <template #activator="{ on }">
        <ValidationProvider v-slot="{errors, validate}" mode="lazy" rules="validateDate">
          <v-text-field
            placeholder="DD.MM.YYYY"
            v-model="inputValue"
            v-mask="mask"
            :label="label"
            outlined
            class="f-input"
            v-on="on"
            @blur="setCalendarValue(inputValue, validate)"
          >
            <template #append>
              <ph-calendar-blank
                class="icon-calendar text-black"
                v-on="on"
              />
            </template>
          </v-text-field>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </template>
      <v-date-picker
        v-model="dateValue"
        class="justify-start mt-16"
        no-title
        scrollable
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue'
import {extend, ValidationProvider} from 'vee-validate';
import DateTimeConverter, {CALENDAR_FORMAT, DATE_DEFAULT_FORMAT,} from '~/utility/DateTimConverter'

export default Vue.extend({
  name: 'DatePicker',
  components: {
    ValidationProvider
  },
  mounted() {
  },
  props: {

    label: {
      type: String,
      required: false,
    } as PropOptions<string>,

    initValue: {
      type: String,
      required: false,
    } as PropOptions<string>,
  },
  data() {
    return {
      mask: '##.##.####',
      openCalendar: false,
      inputValue: this.initValue,
      dateValue: new DateTimeConverter()
        .toDateFormat(CALENDAR_FORMAT)
        .convert(new Date().toISOString())
    }
  },

  watch: {
    dateValue(val: string) {
      this.inputValue = this.toInputDateFormat()
      this.$emit('onChangeDate', val)
    },
  },
  methods: {
    toInputDateFormat(): string {
      return new DateTimeConverter().toDateFormat(DATE_DEFAULT_FORMAT).fromDateFormat(CALENDAR_FORMAT).convert(this.dateValue);
    },
    setCalendarValue(date: string, validate: Function): void {
      console.log(validate)
      validate(date).then((result: any) => {
        console.log(result)
        if (result.valid) {
          this.dateValue = new DateTimeConverter().fromDateFormat(DATE_DEFAULT_FORMAT).toDateFormat(CALENDAR_FORMAT).convert(date)
          this.toInputDateFormat()
        }
      })
    },
  },
})


extend('validateDate', {
  validate: (value: string) : any => {
    console.log("validate")
    const convertedDate = new DateTimeConverter().fromDateFormat(DATE_DEFAULT_FORMAT).toDateFormat(CALENDAR_FORMAT).convert(value)
    if (convertedDate !== "Invalid date") {
      return true
    }
  },
  message: (field: any, args: any) => {
    return `${args._value_} is not a valid date.`
  },
  computesRequired: true // this is caveat!
});
</script>

<style scoped></style>
