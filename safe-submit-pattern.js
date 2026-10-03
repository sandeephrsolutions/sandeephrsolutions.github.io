/* Step 3.8 — Optional submit-feedback pattern
   Adapt this pattern to the EXISTING handler rather than replacing it.

   Important:
   - Keep the existing Firebase/Firestore operation.
   - Keep the existing WhatsApp action.
   - Set the button disabled state only while the existing async operation runs.
   - Restore the button in a finally block.
*/
function setFormBusy(form, busy) {
  const button = form.querySelector('button[type="submit"], input[type="submit"]');
  if (!button) return;
  if (busy) {
    if (!button.dataset.originalText) button.dataset.originalText = button.textContent;
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.textContent = 'Submitting…';
  } else {
    button.disabled = false;
    button.removeAttribute('aria-busy');
    if (button.dataset.originalText) button.textContent = button.dataset.originalText;
  }
}

function showFormStatus(form, message, type) {
  const status = form.querySelector('.form-status');
  if (!status) return;
  status.textContent = message;
  status.hidden = false;
  status.className = 'form-status ' + (type === 'error' ? 'is-error' : 'is-success');
}
