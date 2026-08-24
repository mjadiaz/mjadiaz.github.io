/**
 * The old Hugo site published its feed at /index.xml. Keep serving a real feed
 * there so existing subscribers are not dropped — a redirect will not do, as
 * Astro would emit it as a directory rather than a file at that exact path.
 */
export { GET } from './rss.xml';
