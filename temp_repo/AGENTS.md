# Project Guidelines and Rules

## References and Appendices
*   **Always** add new references to the Appendices section (`/src/components/Appendix.tsx`) whenever new features, medical guidelines, or calculation methods are added to the application.
*   **Always** remove old references from the Appendices when their corresponding features/sources are modified or removed.

## Legal and Liability Disclaimers
*   When rendering disclaimers, state that: "The developers and contributors assume no legal liability for any adverse clinical outcomes, prescribing errors, or legal issues arising from the use of this digital application."
*   **Do not** mention the NTP (National Tuberculosis Program) or NATG (National Antimicrobial Treatment Guidelines) in the context of non-liability.

## Pediatric Logic
*   The pediatric age group is strictly **0-18 years**. If an age of exactly 18 years or more is entered, the application must not allow calculation of pediatric doses and should instead refer the user to the adult infection sections.
