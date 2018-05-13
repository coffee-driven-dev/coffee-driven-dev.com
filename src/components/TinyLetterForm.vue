<template>
	 <form action="https://tinyletter.com/coffee-driven-dev" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/coffee-driven-dev', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
		
		<input type="text" name="email" id="tlemail" placeholder="ex. robotluv@gmail.com" />
		<input type="hidden" value="1" name="embed"/>
		<button type="submit">Subscribe</button>
		<label for="tlemail">Join the conversation! 🚀</label>
	</form>
</template>

<script>
export default {
  name: "TinyLetterForm"
};
</script>

<style lang="scss" scoped>
@import "~@styles/_global.scss";

form {
  font-size: 18px;
  margin-top: 30px;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  padding: 15px;
  font-weight: 700;
  font-size: 18px;
  background-color: $secondary;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
}

label {
  color: #fff;
  margin-top: 7px;
  display: block;
}

input {
  // display: block;
  background-color: $input-background;
  border: none;
  padding: 15px;
  font-size: 18px;
  min-width: 200px;
}
</style>
