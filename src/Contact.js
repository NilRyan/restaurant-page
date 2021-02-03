const Contact = () => {
  const content = document.querySelector('#content');
  const contact = document.createElement('div');
  contact.innerHTML = `
  <div class = "contact">
    <form>
    <div class="mb-3 ">
    <label for="email" class="form-label form-control-lg">EMAIL ADDRESS</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
    </div>
    <div class="mb-3">
    <label for="text-area" class="form-label form-control-lg">Comments:</label>
    <textarea class="form-control" id="text-area" rows="15" required></textarea>
    <button type="submit" class="btn  btn-lg btn-success">Submit</button>
    </div>
    </form>
  </div>
  
  `;
  content.appendChild(contact);
};

export default Contact;
