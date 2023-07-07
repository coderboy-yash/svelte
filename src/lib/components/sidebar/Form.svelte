<script>
  import Form from "./Form.svelte";
  import Input from "./Input.svelte";
  //   import placeholder from "./Input.svelte";
  import Select from "./Select.svelte";
  import Button from "./Button.svelte";

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
  let price = data.price ?? 20;
  let year = data.year ?? "";
  let type = data.type ?? "original";
  let km = data.km ?? "";
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
    if (touchedFields.length && length < 5) {
      errors.length = "Length should be at least 5";
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
      bind:value={length}
      on:blur={() => (touchedFields.length = true)}
      error={errors.length}
    />
    <label for="avatar">Upload a picture:</label>
    <input
      accept="image/png, image/jpeg"
      bind:files
      id="avatar"
      name="avatar"
      type="file"
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
    margin-top: 16px;
  }

  .fieldset {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
  }
</style>
