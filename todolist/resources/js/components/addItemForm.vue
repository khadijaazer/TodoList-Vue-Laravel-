<template>
    <div class="mt-3">
        <!-- heading-->
        <h2>add item form</h2>
        <div class="container m-2 w-100"> <!--Bootstrap classes-->
            <input
                type="test"
                placeholder="add item"
                class="border"
                v-model="item.name"
            /> <!--v-model directive to bind the input value to the item.name property in the component's data.-->
<!--Create a butt with a dynamic classes based on item.name -->
<!--@click event listener that calls the addItem method when clicked.-->
            <button
                :class="[item.name ? 'active' : 'notactive']"
                @click="addItem()"
            >
                add +
            </button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'; //for making HTTP requests.
export default {
    data: function() { //defining the initial state of the component.
        return {
            item: {
                name: ""
            }
        };
    },
    methods: {//to define the methods of the component
    addItem() {
        if (this.item.name == "") {
            return;
        }

        axios
            .post("api/item/store", { item: this.item })
            .then(res => {
                if (res.status == 201) {
                    this.item.name = "";
                    this.$emit("reloadlist");
                }
            })
            .catch(error => {
                console.error('Error from Axios post:', error);
            });
    }
}

};
</script>

<style scoped>
.active {
    color: white;
    background-color: blue;
}
.inactive {
    color: gray;
}
</style>
