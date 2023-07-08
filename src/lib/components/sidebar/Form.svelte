<script>
  import Form from "./Form.svelte";
  import Input from "./Input.svelte";
  //   import placeholder from "./Input.svelte";
  import Select from "./Select.svelte";
  import Button from "./Button.svelte";
  import UploadWidget from "../UploadWidget.svelte";

  //   file input
  let files;

  $: if (files) {
    // Note that `files` is of type `FileList`, not an Array:
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    console.log(files);

    for (const file of files) {
      console.log(`${file.name}: ${file.size} bytes`);
    }
  }

  export let data = {};
  export let onSubmit = () => {};

  let name = data.name ?? "";
  let brand = data.brand ?? "";
  let price = data.price ?? 0;
  let year = data.year ?? 2023;
  let type = data.type ?? "original";
  let km = data.km ?? 0;
  let city = data.city ?? "";
  let img = data.img ?? "";

  let errors = {};
  let touchedFields = {};

  $: result = {
    name,
    brand,
    price,
    year,
    type,
    km,
    city,
    img,
  };

  $: errors = validate(touchedFields, result);

  const validate = () => {
    const errors = {};
    if (touchedFields.name && name === "") {
      errors.name = "Name is required";
    }
    if (touchedFields.brand && brand === "") {
      errors.brand = "brand is required";
    }
    if (touchedFields.price && price == 0) {
      errors.price = "price is required ";
    }
    if (touchedFields.year && year <= 2023 && year >= 2005) {
      errors.year = "enter a valid year after 2005 ";
    }
    if (touchedFields.km && km > 1) {
      errors.year = "enter  valid kms ";
    }
    if (touchedFields.city && city === "") {
      errors.city = "city is required";
    }
    if (
      touchedFields.type &&
      touchedFields.length &&
      type === "original" &&
      length >= 10 &&
      length <= 20
    ) {
      errors.type =
        'For type "original" length should not be between 10 and 20';
    }
    return errors;
  };

  const validateAndSubmit = () => {
    touchedFields = { name: true, length: true, type: true };
    if (!Object.keys(errors).length) {
      onSubmit(result);
    }
  };
</script>

<div class="form">
  <fieldset class="fieldset">
    <!-- <legend>form</legend> -->
    <Input
      type="text"
      placeholder="mahindra"
      label="Manufacturer"
      bind:value={name}
      on:blur={() => (touchedFields.name = true)}
      error={errors.name}
    />
    <Input
      type="text"
      placeholder="XUV 700"
      label="Car model"
      bind:value={name}
      on:blur={() => (touchedFields.name = true)}
      error={errors.name}
    />
    <Input
      type="number"
      label="price in Lakhs"
      placeholder="23"
      bind:value={price}
      on:blur={() => (touchedFields.length = true)}
      error={errors.length}
    />
    <Input
      type="number"
      label="year of purchase"
      placeholder="23"
      bind:value={year}
      on:blur={() => (touchedFields.length = true)}
      error={errors.length}
    />
    <Select
      label="Type"
      bind:value={type}
      on:blur={() => (touchedFields.type = true)}
      error={errors.type}
    >
      <option value="original">Petrol</option>
      <option value="refubrished">Diesel</option>
    </Select>
    <Input
      type="number"
      label="km covered"
      placeholder="23"
      bind:value={km}
      on:blur={() => (touchedFields.length = true)}
      error={errors.length}
    />
    <Input
      type="text"
      placeholder="Kanpur"
      label="city"
      bind:value={city}
      on:blur={() => (touchedFields.name = true)}
      error={errors.name}
    />
    <label for="avatar">Upload a picture:</label>
    <UploadWidget />
    <!-- <input
      accept="image/png, image/jpeg"
      bind:files
      id="avatar"
      name="avatar"
      type="file"
    /> -->

    <Button on:click={validateAndSubmit}>ADD</Button>
    <!-- <div>
      <pre>
				{JSON.stringify(result, null, 2)}
			</pre>
    </div> -->
  </fieldset>
</div>

<style>
  .fieldset > * {
    display: block;
  }

  .fieldset > :global(:not(legend) + *) {
    margin-top: 4px;
  }

  .fieldset {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
  }
</style>
