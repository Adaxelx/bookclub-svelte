<script lang="ts">
	export let form
	console.log(form)
</script>

<h1>Book Group form</h1>
<form method="post">
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />
	<input type="hidden" name="creatorId" value="1" />
	<button type="submit">Submit</button>
</form>
