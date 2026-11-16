# ♿ Accessibility engineering guide

## Purpose and current status

This guide defines the accessibility expectations for the Anime Book Store browser interface. The application uses React and standard HTML controls. A semantic structure is a useful foundation, but it does not by itself establish WCAG conformance. No independent accessibility audit or assistive-technology certification is claimed.

Treat accessibility as a release requirement, not a final visual polish task.

## Supported user journeys

The following journeys must remain usable without relying only on colour, pointer precision, or visual position:

1. Open the catalogue and understand its loading, empty, error, and populated states.
2. Move between catalogue, create, details, edit, and delete routes.
3. Enter and submit the title, author, and publication year fields.
4. Understand validation feedback and correct invalid values.
5. Open and dismiss the book preview dialog.
6. Confirm or cancel a destructive delete action.

## Implementation requirements

### Semantics and structure

- Use one clear page-level heading for each route.
- Use native `button`, `a`, `form`, `label`, `input`, and table elements where their semantics match the action.
- Associate every input with a visible label. Placeholder text is supplementary and is not a replacement for a label.
- Use table header cells with correct scope for tabular catalogue data.
- Use headings in a logical order. Do not choose heading levels only for their visual size.
- Keep DOM order aligned with the intended reading and keyboard order.

### Keyboard operation

- Every interactive action must be reachable with Tab and Shift+Tab.
- Buttons and links must activate with their native keyboard behavior.
- A dialog must move focus into the dialog when opened, keep focus within it while modal, close on Escape where appropriate, and return focus to the invoking control.
- Do not create custom clickable `div` elements when a native button is suitable.
- Focus indicators must remain visible in every supported theme and state.

### Forms and validation

- Provide a persistent label and useful instructions for each field.
- Set the correct input type and constraints where applicable.
- Associate field-level errors with the relevant input using `aria-describedby`.
- Set `aria-invalid="true"` only while the field is invalid.
- Explain how to fix an error. Do not communicate errors using colour alone.
- Preserve entered values when a server validation error occurs.
- Ensure submit buttons expose disabled/loading state without losing their accessible name.

### Dynamic feedback

- Loading feedback should be exposed through a polite live region or an appropriate status role.
- Important mutation failures should be announced and remain available long enough to understand.
- Avoid announcing every minor render or duplicate notification.
- Empty states should explain what the user can do next.
- Error states should offer a clear retry path when retry is safe.

### Colour, motion, and layout

- Text and controls must have sufficient contrast against their backgrounds.
- Never use colour as the only way to distinguish success, error, selected, or disabled states.
- Respect reduced-motion preferences for non-essential transitions.
- Support browser zoom and narrow viewports without horizontal scrolling for ordinary page content.
- Interactive targets should be comfortably sized and separated.
- Ensure table content has a usable small-screen alternative.

## Manual test checklist

- [ ] Complete every CRUD journey using keyboard only.
- [ ] Verify visible focus at every interactive step.
- [ ] Check the form with an invalid title, author, and year.
- [ ] Open and close the preview dialog with keyboard.
- [ ] Confirm focus returns to the correct control after dialog dismissal.
- [ ] Inspect the page at 200% zoom.
- [ ] Inspect at a narrow mobile viewport.
- [ ] Check light/dark browser contrast settings if themes are introduced.
- [ ] Test with at least one screen reader and browser combination.
- [ ] Verify status and error announcements are understandable.

## Automated checks

Add automated accessibility tests when the project introduces a component test runner. A practical future stack is Vitest, React Testing Library, and axe-core. Automated scans detect only a subset of accessibility defects; they do not replace keyboard and assistive-technology testing.

## Definition of done

A UI change is not complete until semantics, labels, keyboard access, focus behavior, responsive behavior, and dynamic feedback have been reviewed. Record known exceptions in the pull request rather than claiming full conformance without evidence.
