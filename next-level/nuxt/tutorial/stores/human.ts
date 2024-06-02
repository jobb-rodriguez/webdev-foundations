import { defineStore } from "pinia";
import { Human } from "@/composables/types/human"

export const useHumanStore = defineStore("human", () => {
    const human: Ref<Human> = ref({id: 47, name: "Agent 47"});

    function updateCurrentHuman(input: Human) {
        human.value = input;
    }

    return {
        human,
        updateCurrentHuman
    };
});
