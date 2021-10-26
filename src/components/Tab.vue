<template>
<div class="tab">
    <input :id="id" :name="name" type="radio" :checked="checked" />
    <label :for="id"><slot></slot></label>
</div>
</template>

<style>
.tab {
    display: inline-block;
    margin-right: 0.5rem!important;
}

.tab>input[type="radio"] {
    display: none;
}

.tab>input[type="radio"] + label {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    font-weight: 400;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;
    user-select: none;
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}


.tab>input[type="radio"]:checked + label{
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
</style>

<script>
export default {
    name: "Tab",
    props: ["id", "name", "checked"],
}
</script>