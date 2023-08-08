<script setup lang="ts">
import { MealType, PlanedMeal } from '@/types/PlanedMeal';
import { useDiningScheduleStore } from '@/store/diningSchedule'

const diningScheduleStore = useDiningScheduleStore()

const today = new Date();
const selectedDate = ref(today);

const selectedFirstDateOfWeek = () => {
    const date = new Date(selectedDate.value);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    date.setDate(diff);
    return date;
};

const scheduledBreakfasts: any = computed(() => {
    return diningScheduleStore.scheduledBreakfasts()
});
const scheduledLunches = computed(() => {
    return diningScheduleStore.scheduledLunches()
});
const scheduledDinners = computed(() => {
    return diningScheduleStore.scheduledDinners()
});

const selectedWeekDays = computed(() => {
    const firstDateOfWeek = selectedFirstDateOfWeek();
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDateOfWeek);
        date.setDate(firstDateOfWeek.getDate() + i);
        weekDays.push(date);
    }
    return weekDays;
});

const moveToPreviousWeek = () => {
    const date = new Date(selectedDate.value);
    date.setDate(date.getDate() - 7);
    selectedDate.value = date;
};

const moveToNextWeek = () => {
    const date = new Date(selectedDate.value);
    date.setDate(date.getDate() + 7);
    selectedDate.value = date;
};

const moveToToday = () => {
    selectedDate.value = today;
};

const getScheduledMeal = (date: Date, mealType: MealType) => {
    const formattedDate = date.toDateString();
    switch (mealType) {
        case MealType.Breakfast:
            return scheduledBreakfasts.value.find((meal: PlanedMeal) => meal.date.toDateString() === formattedDate);
        case MealType.Lunch:
            return scheduledLunches.value.find((meal: PlanedMeal) => meal.date.toDateString() === formattedDate);
        case MealType.Dinner:
            return scheduledDinners.value.find((meal: PlanedMeal) => meal.date.toDateString() === formattedDate);
        default:
            return null; // Handle invalid mealType or no scheduled meal for the given date.
    }
};
</script>

<template>
    <v-container class="border">
        <v-row>
            <v-col class="first-col text-caption d-flex align-center justify-center">{{ selectedWeekDays[0].toLocaleDateString('en-AU', { year: 'numeric' }) }}</v-col>
            <v-col v-for="(date,i) in selectedWeekDays" :key="i" class="text-caption rounded-t-lg" :class="date.toDateString() === today.toDateString() ? 'bg-red' : ''">
                <b>{{ date.toLocaleDateString('en-US', { weekday: 'long' }) }}</b><br>
                {{ date.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }) }}
            </v-col>
        </v-row>
        <v-row>
            <v-col class="first-col text-caption d-flex align-center border-t border-b">Breakfast</v-col>
            <v-col v-for="(date, i) in selectedWeekDays" :key="i" class="text-caption text-center d-flex align-center justify-center border-t border-b" :class="date.toDateString() === today.toDateString() ? 'bg-red' : ''">
                <CalendarItem v-if="getScheduledMeal(date, MealType.Breakfast)" :planed-meal="getScheduledMeal(date, MealType.Breakfast)" />
                <CalendarPlanMealDialog v-else :meal-type="MealType.Breakfast" :date="date" />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="first-col text-caption d-flex align-center border-b">Lunch</v-col>
            <v-col v-for="(date, i) in selectedWeekDays" :key="i" class="text-caption text-center d-flex align-center justify-center border-b" :class="date.toDateString() === today.toDateString() ? 'bg-red' : ''">
                <CalendarItem v-if="getScheduledMeal(date, MealType.Lunch)" :planed-meal="getScheduledMeal(date, MealType.Lunch)" />
                <CalendarPlanMealDialog v-else :meal-type="MealType.Lunch" :date="date" />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="first-col text-caption d-flex align-center border-b">Dinner</v-col>
            <v-col v-for="(date, i) in selectedWeekDays" :key="i" class="text-caption text-center d-flex align-center justify-center border-b" :class="date.toDateString() === today.toDateString() ? 'bg-red' : ''">
                <CalendarItem v-if="getScheduledMeal(date, MealType.Dinner)" :planed-meal="getScheduledMeal(date, MealType.Dinner)" />
                <CalendarPlanMealDialog v-else :meal-type="MealType.Dinner" :date="date" />
            </v-col>
        </v-row>
        <v-row>
       
            <v-col cols="12" class="text-center px-2 py-6">
                <v-btn color="blue" variant="outlined" @click="moveToPreviousWeek()" small class="text-none mr-2">
                    <v-icon left>mdi-chevron-left</v-icon>
                   Previous Week
                </v-btn>
                <v-btn color="blue" variant="outlined" @click="moveToToday()" small class="text-none">
                   Today
                </v-btn>
                <v-btn color="blue" variant="outlined" @click="moveToNextWeek()" small class="text-none ml-2">
                   Next Week
                   <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
       
        </v-row>
    </v-container>
</template>

<style scoped>
.first-col {
    min-width: 120px !important;
}
</style>