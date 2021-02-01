This repo contains example implementation of custom web component, accompanied with React wrapper, that will convert all relative `src`, `href` and `action` attribute values into absolute values, based on defined base path.

**PRODUCTION USE DISCLAIMER**

If you intend to make use of this code in production, **never ever, under any circumstance, allow the base path be set dynamically!** Always ensure that the base path is set as a fixed, known, and trusted value.

Otherwise you've blown your application full of security holes, and ended up in a world of trouble.