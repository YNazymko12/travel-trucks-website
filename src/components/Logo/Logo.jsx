import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <Link className={css.link} to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="136"
          height="16"
          fill="none"
        >
          <path
            fill="#475467"
            d="M135.393 7.188h-3.608a.99.99 0 0 0-.235-.576 1.316 1.316 0 0 0-.532-.37 1.814 1.814 0 0 0-.711-.134c-.336 0-.625.062-.866.185-.242.123-.36.298-.355.525-.005.161.064.31.206.448.146.137.428.243.845.32l2.216.397c1.117.204 1.948.547 2.493 1.03.549.478.826 1.12.831 1.925-.005.776-.237 1.45-.696 2.024-.455.568-1.078 1.008-1.868 1.32-.786.308-1.684.462-2.692.462-1.667 0-2.971-.34-3.913-1.022-.938-.682-1.461-1.582-1.57-2.7h3.892c.052.346.223.614.511.803.294.185.663.277 1.108.277.36 0 .656-.061.888-.184.237-.123.358-.299.362-.526-.004-.208-.109-.374-.312-.497-.199-.123-.512-.223-.938-.298l-1.931-.341c-1.113-.194-1.946-.564-2.5-1.108-.554-.545-.829-1.246-.824-2.103-.005-.757.194-1.399.596-1.924.407-.53.987-.933 1.74-1.208.758-.279 1.655-.419 2.692-.419 1.577 0 2.82.327 3.729.98.914.654 1.394 1.558 1.442 2.713ZM116.415 11.96l.028-4.659h.512l2.642-3.665H124l-4.432 5.71h-1.108l-2.045 2.614Zm-3.523 2.585V0h3.921v14.546h-3.921Zm6.733 0-2.5-4.318 2.557-2.784 4.432 7.103h-4.489ZM105.619 14.744c-1.184 0-2.197-.234-3.04-.703a4.836 4.836 0 0 1-1.939-1.974c-.45-.848-.674-1.83-.674-2.948 0-1.117.224-2.097.674-2.94a4.78 4.78 0 0 1 1.939-1.974c.843-.474 1.856-.71 3.04-.71 1.07 0 1.996.193 2.777.582.786.383 1.394.928 1.825 1.633.431.701.649 1.525.654 2.472h-3.637c-.052-.573-.218-1.009-.497-1.307-.275-.303-.63-.455-1.065-.455-.341 0-.64.1-.895.299-.256.194-.455.49-.597.888-.142.393-.213.887-.213 1.484s.071 1.094.213 1.491c.142.393.341.69.597.888.255.194.554.291.895.291.289 0 .544-.066.767-.198.222-.138.402-.337.54-.597.142-.265.227-.587.255-.966h3.637c-.015.961-.235 1.8-.661 2.514-.426.71-1.03 1.26-1.811 1.648-.777.388-1.705.582-2.784.582ZM94.049 9.773V3.636h3.92v10.91h-3.721v-2.074h-.114a3.1 3.1 0 0 1-1.243 1.633c-.592.388-1.295.582-2.11.582-.762 0-1.43-.175-2.002-.525a3.604 3.604 0 0 1-1.328-1.449c-.313-.615-.471-1.321-.476-2.116v-6.96h3.92v6.136c.005.54.142.963.412 1.271.275.308.658.462 1.15.462.328 0 .61-.069.846-.206.242-.142.426-.341.554-.597.133-.26.197-.57.192-.93ZM77.903 14.546V3.636h3.807V5.71h.113c.2-.767.514-1.328.945-1.683a2.344 2.344 0 0 1 1.527-.533c.17 0 .338.015.504.043.17.024.334.06.49.106V6.99a3.51 3.51 0 0 0-.717-.15 6.45 6.45 0 0 0-.731-.05c-.384 0-.73.088-1.037.264-.303.17-.543.411-.718.724-.175.308-.263.67-.263 1.087v5.681h-3.92ZM64.45 3.182V0h12.643v3.182h-4.375v11.364h-3.892V3.181H64.45Z"
          />
          <path
            fill="#101828"
            d="M62.508 0v14.546h-3.92V0h3.92ZM51.247 14.744c-1.165 0-2.169-.222-3.012-.667a4.678 4.678 0 0 1-1.939-1.932c-.45-.843-.674-1.851-.674-3.026 0-1.127.227-2.111.681-2.954a4.873 4.873 0 0 1 1.925-1.968c.829-.468 1.807-.703 2.933-.703.824 0 1.57.128 2.238.384a4.686 4.686 0 0 1 1.711 1.115c.474.483.838 1.07 1.094 1.761.256.692.384 1.47.384 2.337V10h-9.745V7.84h6.137a1.505 1.505 0 0 0-.242-.823 1.538 1.538 0 0 0-.618-.561 1.817 1.817 0 0 0-.873-.206c-.318 0-.609.069-.874.206a1.651 1.651 0 0 0-.64.554c-.155.237-.238.514-.248.83v2.33c0 .35.074.663.22.938.147.275.358.49.633.646.274.157.606.235.994.235.27 0 .516-.038.739-.114.227-.076.421-.185.582-.327.16-.146.28-.322.355-.525h3.58a4.078 4.078 0 0 1-.874 1.974c-.46.554-1.068.985-1.825 1.293-.753.303-1.634.454-2.642.454ZM44.836 3.636l-3.664 10.91h-4.546l-3.665-10.91h4.12l1.761 7.216h.114l1.761-7.216h4.12ZM25.056 14.716c-.696 0-1.312-.114-1.847-.341a2.777 2.777 0 0 1-1.25-1.051c-.303-.469-.454-1.066-.454-1.79 0-.597.102-1.106.305-1.527a2.75 2.75 0 0 1 .853-1.044c.364-.27.788-.476 1.27-.618a7.707 7.707 0 0 1 1.578-.277c.61-.047 1.1-.104 1.47-.17.374-.071.644-.168.81-.291a.606.606 0 0 0 .248-.505v-.028c0-.284-.109-.502-.327-.654-.218-.151-.497-.227-.838-.227-.374 0-.68.083-.916.249-.232.16-.372.41-.419.745h-3.608a3.719 3.719 0 0 1 .632-1.832c.379-.563.93-1.013 1.655-1.35.724-.34 1.629-.51 2.713-.51.781 0 1.482.092 2.102.276.62.18 1.148.434 1.584.76.436.322.767.701.994 1.137.232.43.348.9.348 1.406v7.472h-3.664V13.01h-.086a3.148 3.148 0 0 1-.795.988c-.308.25-.66.433-1.058.546a4.67 4.67 0 0 1-1.3.17Zm1.278-2.472c.299 0 .578-.061.838-.184.266-.123.481-.301.647-.533.166-.232.248-.514.248-.845v-.91a4.538 4.538 0 0 1-.333.121 6.811 6.811 0 0 1-.781.199 9.716 9.716 0 0 1-.448.079 2.232 2.232 0 0 0-.746.234c-.19.104-.331.234-.426.39a.982.982 0 0 0-.135.512c0 .303.107.535.32.696.213.16.485.241.816.241ZM13.452 14.546V3.636h3.807V5.71h.114c.198-.767.513-1.328.944-1.683a2.344 2.344 0 0 1 1.527-.533c.17 0 .339.015.505.043.17.024.333.06.49.106V6.99a3.51 3.51 0 0 0-.718-.15 6.451 6.451 0 0 0-.731-.05c-.384 0-.73.088-1.037.264-.303.17-.542.411-.718.724-.175.308-.262.67-.262 1.087v5.681h-3.92ZM0 3.182V0h12.642v3.182H8.267v11.364H4.375V3.181H0Z"
          />
        </svg>
      </Link>
    </>
  );
};

export default Logo;