import {ref} from "vue";

export const useIncrement = () => {
    const count = ref(0);

    function increment() {
        count.value++
    }

    return {count, increment}

}
export const ChnameName = (getName) => {
    const name = ref("amin");

    function updateName() {
        name.value = getName
    }

    return {name, updateName}

}