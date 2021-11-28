/* eslint-disable react/no-unknown-property */
import Icon from '../../src'

export default (props) => (
  <Icon {...props} customChildren={props.children}>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path d='M18.6592 4.98038C17.7649 3.44836 16.5519 2.23536 15.0199 1.34115C13.4875 0.44699 11.8148 0 10.0003 0C8.18602 0 6.51294 0.44699 4.9807 1.34115C3.44854 2.23523 2.23554 3.44822 1.34129 4.98038C0.44699 6.51262 0 8.18588 0 10C0 11.8142 0.447127 13.4872 1.34115 15.0196C2.23536 16.5513 3.44836 17.7646 4.98052 18.6589C6.51276 19.553 8.18588 20 10.0001 20C11.8143 20 13.4877 19.553 15.0198 18.6589C16.5519 17.7649 17.7648 16.5516 18.659 15.0196C19.553 13.4872 20 11.814 20 10C20 8.18588 19.553 6.51239 18.6592 4.98038ZM11.251 15.2615C11.1638 15.1575 11.1336 15.0706 11.1598 15.0008C11.1511 15.0443 11.1207 15.0834 11.0687 15.118C11.0254 15.066 10.947 15.0008 10.8343 14.9228C10.7212 14.8444 10.6433 14.7795 10.5998 14.7271C10.5823 14.7012 10.5587 14.6643 10.5282 14.6166C10.4978 14.5688 10.4588 14.5059 10.411 14.4277C10.3636 14.3497 10.3289 14.2823 10.3071 14.2257C10.2855 14.1692 10.2835 14.1368 10.3005 14.1283C10.1357 14.1979 9.89691 14.1502 9.58446 13.985C9.52375 13.9504 9.43245 13.8592 9.311 13.7116C9.18955 13.564 9.06363 13.499 8.93338 13.5162C8.89005 13.5249 8.8314 13.5401 8.75756 13.5618C8.68391 13.5836 8.62092 13.5942 8.5688 13.5942C8.51667 13.5942 8.44721 13.5771 8.36038 13.5421C8.29105 13.5162 8.19774 13.4661 8.08053 13.3924C7.96342 13.3188 7.88301 13.2729 7.83973 13.2559C7.7269 13.195 7.67048 13.1647 7.67048 13.1647L7.46215 13.0608C7.41002 13.0349 7.35571 12.9936 7.29929 12.9372C7.24288 12.8807 7.20612 12.822 7.18874 12.7613C7.17141 12.7093 7.1497 12.6051 7.12366 12.4487C7.09762 12.2923 7.06282 12.1796 7.0195 12.1103C6.9675 12.0235 6.89371 11.9367 6.79812 11.85C6.70276 11.7632 6.61597 11.7195 6.5378 11.7195C6.6073 11.7195 6.6073 11.6613 6.5378 11.5438C6.46829 11.4264 6.40755 11.3418 6.35542 11.29C6.33804 11.2725 6.28591 11.2162 6.19912 11.1205C6.11233 11.0249 6.03854 10.9427 5.97779 10.8729C5.91709 10.8035 5.86478 10.7233 5.8215 10.632C5.77817 10.5408 5.76937 10.465 5.79546 10.4041C5.80408 10.3955 5.79546 10.3824 5.76937 10.3651C5.74333 10.348 5.7109 10.3303 5.67173 10.313C5.63274 10.2958 5.59579 10.2805 5.56118 10.2674C5.52629 10.2546 5.50025 10.248 5.48296 10.248C5.50043 10.283 5.5199 10.3458 5.54166 10.4369C5.56337 10.5282 5.58722 10.5955 5.61322 10.6389C5.63068 10.6735 5.70438 10.7996 5.83459 11.0162C6.06043 11.3808 6.16442 11.6502 6.14718 11.8237C6.09505 11.8409 6.06025 11.8325 6.04292 11.7978C6.02555 11.7632 6.01241 11.7154 6.00384 11.6546C5.99517 11.594 5.9866 11.5506 5.97775 11.5244C5.95171 11.4723 5.88444 11.4158 5.77585 11.3549C5.6674 11.2944 5.60004 11.2335 5.57404 11.1726C5.5828 11.1726 5.59347 11.1686 5.6066 11.1595C5.61969 11.1508 5.63064 11.1468 5.63921 11.1468C5.64801 11.0687 5.60245 10.9688 5.50257 10.8471C5.4027 10.7257 5.36165 10.6389 5.37889 10.5868C5.30938 10.5346 5.24864 10.4326 5.19651 10.2809C5.14443 10.1289 5.10096 10.0311 5.06626 9.98766C5.03159 9.93576 4.98831 9.8902 4.93614 9.85103C4.88401 9.81208 4.81902 9.76871 4.74081 9.72091C4.66268 9.67316 4.61055 9.64069 4.58451 9.62327C4.56709 9.61474 4.53248 9.57584 4.48035 9.50633C4.19394 9.15899 4.10715 8.97232 4.22002 8.94633C4.10719 8.97232 4.01384 8.88777 3.94005 8.6923C3.86621 8.49706 3.8424 8.34715 3.8684 8.24303L3.8424 8.23008C3.85116 8.19528 3.85545 8.09344 3.85545 7.92401C3.85545 7.75467 3.86639 7.60057 3.88805 7.46174C3.90985 7.32287 3.95104 7.25332 4.01174 7.25332C3.95104 7.26198 3.90552 7.20762 3.8751 7.09064C3.84473 6.97334 3.84258 6.89298 3.86853 6.84966C3.8772 6.82357 3.91638 6.84113 3.98574 6.90178C4.05507 6.96235 4.0942 7.00166 4.10286 7.0189C4.21574 6.95797 4.2592 6.87998 4.23311 6.78439C4.21574 6.74973 4.12457 6.65861 3.95966 6.51094C3.58632 6.26799 3.39528 6.15073 3.38675 6.15931C3.43865 6.06394 3.42569 5.98149 3.34757 5.91194C3.26083 5.96407 3.21093 5.97702 3.19784 5.95111C3.18489 5.92503 3.17404 5.87746 3.16524 5.80791C3.15666 5.73854 3.13486 5.6995 3.10025 5.69079C3.05678 5.68213 3.00465 5.64747 2.94395 5.58667C3.71648 4.35402 4.73643 3.39049 6.00384 2.6959C6.05587 2.68732 6.15133 2.68295 6.2902 2.68295C6.35957 2.69161 6.42474 2.71336 6.48544 2.74803C6.54624 2.78269 6.60922 2.83053 6.67421 2.89123C6.73943 2.9518 6.78932 2.99526 6.82398 3.02135C6.84136 2.96922 6.81969 2.89109 6.75894 2.78693C6.77618 2.7348 6.87173 2.68267 7.04535 2.63063C7.24488 2.60459 7.37523 2.60883 7.43593 2.64372C7.38394 2.56555 7.29719 2.45701 7.17561 2.31818L7.11053 2.38317C7.04102 2.32247 6.85887 2.3528 6.56366 2.47434C6.54642 2.48291 6.50295 2.50695 6.43345 2.5459C6.36408 2.58489 6.30748 2.61317 6.2642 2.6305C6.21208 2.64787 6.16004 2.65221 6.10791 2.64354C6.52453 2.41793 6.93261 2.23969 7.33199 2.10962C7.35781 2.12686 7.40131 2.16381 7.46211 2.22018C7.52281 2.27659 7.57056 2.31791 7.60531 2.34386C7.57927 2.32662 7.56185 2.3351 7.55318 2.3699C7.51852 2.47402 7.51852 2.56081 7.55318 2.63022C7.59651 2.69115 7.65516 2.72568 7.729 2.73448C7.80283 2.74305 7.89172 2.73877 7.99589 2.72135C8.10005 2.70411 8.1696 2.6953 8.20431 2.6953L8.33456 2.70844C8.61226 2.73448 8.72085 2.70844 8.6601 2.63022C8.6861 2.66511 8.71647 2.73667 8.75118 2.84521C8.78584 2.95376 8.82502 3.02974 8.8683 3.07316C8.91176 3.03827 8.92042 2.97756 8.89434 2.89077C8.8683 2.80399 8.8683 2.74305 8.89434 2.70839C8.90291 2.69115 8.929 2.6736 8.97246 2.65627C9.01592 2.63903 9.06577 2.61951 9.12223 2.5978C9.17865 2.576 9.21554 2.56086 9.23306 2.55224C9.28509 2.51744 9.2503 2.45665 9.1288 2.36986C9.11142 2.36115 9.07462 2.34815 9.01825 2.33077C8.96183 2.31367 8.9118 2.29606 8.86848 2.27878C8.82515 2.26154 8.77959 2.2376 8.73184 2.20722C8.68409 2.1768 8.66234 2.14214 8.66658 2.10297C8.67096 2.06379 8.69495 2.01399 8.73823 1.95319C8.79035 1.90991 8.87505 1.89249 8.99216 1.90116C9.10928 1.90973 9.19835 1.93139 9.25905 1.96615C9.49356 2.0964 9.52818 2.21379 9.36331 2.31777C9.45024 2.32635 9.5544 2.3611 9.6759 2.4218C9.7973 2.48264 9.84505 2.54777 9.8191 2.61727C9.88856 2.48706 9.95793 2.4218 10.0275 2.4218C10.0708 2.4306 10.1122 2.48925 10.1512 2.59775C10.1902 2.7062 10.214 2.76476 10.2226 2.77357C10.2922 2.86893 10.3612 2.89068 10.4311 2.83856C10.5004 2.78652 10.5722 2.71058 10.6459 2.6107C10.7195 2.51096 10.7607 2.4654 10.7695 2.47407C10.6827 2.4395 10.6736 2.4047 10.7436 2.36995C10.8734 2.29182 10.9908 2.27007 11.0951 2.30496C11.1209 2.3222 11.1559 2.36137 11.199 2.42194C11.2769 2.57841 11.2639 2.65207 11.16 2.6434C11.238 2.71291 11.2703 2.79979 11.2577 2.90382C11.2446 3.00798 11.177 3.05578 11.0556 3.04702C11.0124 3.04702 10.9491 3.02522 10.8665 2.98194C10.7841 2.93862 10.7212 2.91481 10.6777 2.91039C10.6343 2.90587 10.5734 2.92981 10.4954 2.98194C10.4607 3.02541 10.4152 3.09924 10.3587 3.20332C10.3022 3.30766 10.2522 3.38132 10.2089 3.42465C10.0787 3.55485 9.86152 3.60269 9.55773 3.56785C9.58382 3.56785 9.58154 3.59389 9.55116 3.64602C9.52065 3.69806 9.47961 3.75675 9.42748 3.82179C9.37535 3.88687 9.34498 3.92376 9.3364 3.93243C9.25823 4.01922 9.20619 4.1191 9.18011 4.23193C9.18011 4.2493 9.17573 4.30795 9.16697 4.40765C9.15817 4.50753 9.14093 4.5836 9.11485 4.63559C9.21901 4.60955 9.30151 4.66182 9.36222 4.79189C9.41434 4.91347 9.41434 4.97855 9.36222 4.98731C9.64876 4.94408 9.90051 4.96131 10.1177 5.03944C10.4301 5.15227 10.6084 5.2651 10.6517 5.37798C10.7036 5.29976 10.8294 5.29534 11.0291 5.36484C11.1073 5.40817 11.1764 5.53856 11.2376 5.75542C11.2723 5.88553 11.331 5.9985 11.4134 6.09391C11.496 6.18936 11.5848 6.21536 11.6804 6.17203L11.7193 6.14599C11.7541 6.12875 11.7822 6.11347 11.8039 6.10048C11.8257 6.08752 11.8494 6.0701 11.8753 6.04835C11.9015 6.02664 11.9168 6.00712 11.9209 5.98988C11.9249 5.97255 11.9187 5.95499 11.9015 5.93775C11.8407 5.88562 11.7951 5.81407 11.7648 5.72304C11.7347 5.63187 11.7412 5.55151 11.7845 5.48196C11.8104 5.4473 11.8799 5.39517 11.9927 5.32567C12.1057 5.25612 12.1751 5.18675 12.201 5.11729C12.2362 5.00446 12.1924 4.9111 12.071 4.83722C11.9494 4.76356 11.8885 4.69629 11.8885 4.63541C11.8885 4.59195 11.9168 4.53995 11.9731 4.47912C12.0297 4.41841 12.0536 4.36182 12.0448 4.30987C12.0448 4.28365 12.0294 4.22951 11.9991 4.14701C11.969 4.06437 11.9514 4.00367 11.9472 3.96463C11.9428 3.92554 11.9625 3.87998 12.0057 3.82799C12.0662 3.79319 12.2095 3.79538 12.4352 3.83437C12.6609 3.87355 12.8086 3.91478 12.8782 3.95806C12.9043 3.9753 12.9607 4.00139 13.0475 4.03623C13.1342 4.07071 13.2103 4.1076 13.2755 4.14683C13.3403 4.18582 13.3772 4.22258 13.3859 4.25738H13.3209C13.3816 4.30964 13.4186 4.37021 13.4314 4.43976C13.4446 4.50944 13.4121 4.56139 13.334 4.59623C13.3859 4.58743 13.4556 4.60052 13.5424 4.63523C13.6813 4.68726 13.6857 4.73511 13.5555 4.77843C13.5814 4.76963 13.6182 4.7611 13.6658 4.75235C13.7136 4.74368 13.7503 4.73059 13.7765 4.71335C13.7937 4.70459 13.8155 4.68954 13.8414 4.66774C13.8676 4.64604 13.887 4.63295 13.9001 4.6288C13.9132 4.62451 13.9325 4.61999 13.9588 4.61566C13.9847 4.61137 14.0106 4.61794 14.0365 4.63518C14.0456 4.63518 14.0649 4.61343 14.0952 4.5701C14.1253 4.52682 14.1583 4.48336 14.1927 4.44003C14.2276 4.3967 14.2577 4.37504 14.2839 4.37504C14.3096 4.37504 14.3337 4.38571 14.3552 4.40742C14.3772 4.42922 14.3942 4.45298 14.4074 4.47907C14.4204 4.50516 14.4332 4.53339 14.4463 4.56358C14.4594 4.59395 14.4701 4.61799 14.4788 4.63523C14.496 4.67855 14.5375 4.7243 14.6024 4.77186C14.6674 4.81948 14.7085 4.86518 14.726 4.9085C14.7348 4.93459 14.7518 4.99971 14.778 5.10402C14.8039 5.20818 14.8389 5.27974 14.8821 5.31873C14.9255 5.35791 14.9906 5.39038 15.0773 5.41638C15.0947 5.42518 15.134 5.42076 15.1945 5.40352C15.2551 5.38605 15.3052 5.38172 15.3442 5.39038C15.3835 5.39896 15.4029 5.43362 15.4029 5.49455C15.4548 5.44242 15.4808 5.40762 15.4808 5.39038C15.4896 5.50326 15.5176 5.59447 15.5657 5.66384C15.6134 5.73316 15.6893 5.76372 15.7935 5.75491L15.7673 6.04146C15.7414 6.08479 15.6763 6.11726 15.5719 6.13892C15.4677 6.16072 15.4027 6.18038 15.3765 6.19762C15.3506 6.20628 15.2876 6.25837 15.1876 6.35396C15.0878 6.44955 15.0469 6.50596 15.064 6.5232C14.9167 6.35824 14.695 6.31049 14.4001 6.38C14.0703 6.43208 13.8444 6.48416 13.723 6.53629C13.5842 6.60584 13.4886 6.67083 13.4365 6.73153C13.4278 6.7402 13.4129 6.77071 13.3911 6.8227C13.3693 6.87474 13.3477 6.92258 13.3261 6.96591C13.3041 7.00923 13.2849 7.03094 13.2676 7.03094C13.3199 7.0225 13.3783 6.98105 13.4434 6.90739C13.5086 6.83356 13.5498 6.79251 13.567 6.78371C13.7925 6.63622 13.9792 6.58409 14.1276 6.62851C14.3185 6.68064 14.3489 6.75014 14.2186 6.83693C14.2016 6.85417 14.1557 6.86069 14.082 6.85645C14.0084 6.85216 13.9584 6.85417 13.9322 6.86302C14.0106 6.88026 14.0755 6.9042 14.1279 6.93439C14.1797 6.96477 14.1929 7.00604 14.1668 7.05808C14.3056 7.13625 14.3317 7.22304 14.245 7.31863C14.132 7.43164 13.9978 7.47921 13.8414 7.46183C13.8676 7.46183 13.8676 7.47925 13.8414 7.51392L13.6198 7.65712C13.6026 7.66565 13.5461 7.68731 13.4506 7.7222C13.3551 7.75668 13.2899 7.79604 13.2552 7.83932C13.2293 7.87407 13.2162 7.92611 13.2162 7.9958C13.2162 8.06534 13.2118 8.11747 13.2031 8.15213C13.1945 8.18702 13.1597 8.19542 13.0992 8.17818C13.073 8.23021 12.9927 8.27149 12.8582 8.30168C12.7237 8.33205 12.6347 8.37761 12.5913 8.43832C12.6431 8.50787 12.639 8.57723 12.5782 8.64674C12.4739 8.73366 12.3828 8.72486 12.3048 8.6207C12.2614 8.63807 12.2287 8.6814 12.207 8.75095C12.1855 8.82045 12.1527 8.8682 12.1096 8.89415C12.1705 8.98965 12.1615 9.0593 12.0837 9.10248C12.0922 9.10248 12.1118 9.11129 12.1421 9.12857C12.1724 9.1459 12.2048 9.16757 12.2398 9.19365C12.2745 9.21974 12.296 9.23283 12.3048 9.23283C12.2701 9.31077 12.2222 9.34981 12.1615 9.34981C12.2136 9.48877 12.1486 9.64078 11.9664 9.8056C11.9314 9.84026 11.8771 9.87492 11.8034 9.90977C11.7293 9.94443 11.6622 9.97257 11.6013 9.99432C11.5404 10.0161 11.506 10.0312 11.4972 10.0399C11.4105 10.1181 11.3452 10.1984 11.302 10.2808C11.2588 10.3634 11.2522 10.4435 11.2823 10.5218C11.3128 10.6001 11.393 10.6519 11.5234 10.6781L11.5361 10.7822V11.0165L11.5491 11.1208C11.558 11.1815 11.5646 11.2358 11.5688 11.2837C11.5731 11.3315 11.5731 11.392 11.5688 11.466C11.5646 11.5396 11.545 11.581 11.5103 11.5894C11.4759 11.5983 11.4281 11.5894 11.3672 11.5634C11.2974 11.5287 11.2152 11.3377 11.1195 10.9906C11.1022 10.9038 11.0499 10.7998 10.9631 10.6781C10.9197 10.7215 10.8829 10.7496 10.8526 10.7626C10.8224 10.7757 10.8004 10.778 10.7878 10.7691C10.7747 10.7606 10.7508 10.7409 10.716 10.7106C10.6814 10.6803 10.6512 10.6563 10.6251 10.6392C10.5816 10.6132 10.5058 10.5914 10.397 10.5742C10.2887 10.5569 10.2211 10.535 10.1954 10.5091C9.9868 10.6657 9.86083 10.6263 9.81751 10.3922C9.80027 10.4355 9.80236 10.494 9.82407 10.568C9.84587 10.6418 9.85668 10.6829 9.85668 10.6916C9.79598 10.8046 9.70052 10.813 9.57027 10.7175C9.51814 10.6657 9.39875 10.6591 9.21208 10.6981C9.02541 10.737 8.90173 10.7435 8.84102 10.7175C8.84982 10.7175 8.86706 10.7305 8.89315 10.7566C8.91915 10.7736 8.93661 10.7868 8.94523 10.7955C8.93648 10.8304 8.92352 10.8562 8.90606 10.8736C8.88864 10.8908 8.87126 10.8973 8.85398 10.8933C8.8366 10.8889 8.81708 10.8889 8.79528 10.8933C8.77357 10.8973 8.7541 10.9039 8.73667 10.9126C8.70197 10.9385 8.65864 10.9841 8.60651 11.0492C8.55448 11.1143 8.51544 11.1555 8.4894 11.1726C8.54139 11.3115 8.56533 11.418 8.56104 11.4916C8.55653 11.5656 8.54367 11.6741 8.52187 11.8172C8.50007 11.9603 8.48926 12.0755 8.48926 12.1625C8.48926 12.301 8.53053 12.4621 8.61294 12.6441C8.69545 12.8264 8.79304 12.9522 8.90592 13.0218C8.96685 13.0564 9.07106 13.078 9.21851 13.0866C9.36605 13.0954 9.47026 13.0866 9.53096 13.0607C9.58309 13.035 9.62204 13.0044 9.64808 12.9697C9.67412 12.935 9.69592 12.8848 9.71316 12.8199C9.73053 12.7549 9.74367 12.7094 9.75233 12.6835C9.81304 12.5183 9.92587 12.4316 10.0906 12.4228C10.1952 12.4141 10.2707 12.4253 10.3188 12.4553C10.3665 12.4857 10.3859 12.5269 10.3771 12.5791C10.3684 12.631 10.3511 12.6853 10.3253 12.7418C10.2991 12.7983 10.2666 12.8611 10.2275 12.9307C10.1887 13.0004 10.1647 13.0524 10.1563 13.0873C10.1389 13.1567 10.1235 13.2542 10.1107 13.3804C10.0976 13.5062 10.0866 13.5822 10.0779 13.6084C10.0954 13.6169 10.1604 13.6212 10.2732 13.6212C10.2732 13.604 10.2797 13.5756 10.2928 13.5366C10.3056 13.4976 10.3122 13.4737 10.3122 13.4651C10.3558 13.5347 10.4252 13.5734 10.5207 13.5822C10.6162 13.5909 10.6858 13.5563 10.7292 13.4781C10.7467 13.5042 10.7988 13.5694 10.8856 13.6736C10.9724 13.7776 11.0201 13.8644 11.0289 13.934C11.0376 13.9689 11.0548 14.0251 11.0807 14.1035C11.1069 14.1815 11.1157 14.2358 11.1069 14.2664C11.0982 14.2963 11.0548 14.3118 10.9768 14.3118C10.9421 14.3118 10.9203 14.3249 10.9118 14.3508C10.9028 14.377 10.9028 14.4093 10.9118 14.4484C10.9206 14.4873 10.9315 14.5244 10.9443 14.559C10.9573 14.5935 10.9746 14.6307 10.9962 14.6697C11.0183 14.7084 11.029 14.7324 11.029 14.7411C11.185 15.0274 11.3979 15.1056 11.6669 14.9756C11.6669 15.2272 11.6061 15.3661 11.4843 15.392C11.4157 15.4092 11.3378 15.3654 11.251 15.2615ZM11.4455 18.2031C11.4283 18.1164 11.4196 18.047 11.4205 17.9952C11.4115 17.9256 11.4421 17.8323 11.5113 17.7152C11.5807 17.5982 11.6154 17.509 11.6154 17.4483C11.4765 17.4137 11.4245 17.3007 11.4589 17.1098C11.4764 16.9795 11.6021 16.8059 11.8366 16.5889C12.0017 16.4413 12.0535 16.2328 11.9929 15.9639C11.9667 15.851 11.9449 15.6859 11.9277 15.4689C11.9105 15.2519 11.893 15.1 11.8755 15.0132C11.8755 15.0391 11.9167 15.063 11.9995 15.0847C12.0819 15.1062 12.1318 15.1346 12.1491 15.169C12.1665 15.1433 12.188 15.0953 12.2142 15.026C12.2401 14.9564 12.2664 14.9045 12.2919 14.8696C12.3095 14.8436 12.3463 14.8111 12.4028 14.7719C12.4593 14.7329 12.4961 14.7092 12.5134 14.7004C12.5305 14.6918 12.5698 14.6638 12.6303 14.6159C12.6912 14.5681 12.7412 14.5314 12.7803 14.5054C12.8196 14.4793 12.8713 14.4598 12.9365 14.447C13.0018 14.4339 13.0472 14.4533 13.0731 14.5054C13.1166 14.5575 13.1081 14.6377 13.0472 14.7463C12.9863 14.855 12.9863 14.931 13.0472 14.9745C13.0561 14.9483 13.0646 14.8917 13.0731 14.8049C13.082 14.7181 13.1081 14.653 13.1513 14.6093C13.2034 14.5575 13.2532 14.5269 13.3011 14.5185C13.3489 14.5094 13.3921 14.5159 13.431 14.538C13.4703 14.5597 13.5159 14.5896 13.5677 14.629C13.6199 14.6679 13.6676 14.6919 13.711 14.7004C13.8411 14.7438 13.9975 14.8393 14.1798 14.987C14.1711 14.9781 14.1711 14.9673 14.1798 14.9542C14.1886 14.9414 14.2057 14.9283 14.232 14.9152C14.2579 14.9024 14.2816 14.8893 14.3035 14.8762C14.325 14.8632 14.3487 14.8528 14.3749 14.8439L14.4139 14.8308C14.4745 14.8308 14.518 14.8266 14.5439 14.8177C14.5698 14.8091 14.6072 14.8177 14.6546 14.8439C14.7021 14.8698 14.7349 14.8893 14.752 14.9024C14.7695 14.9152 14.7998 14.9391 14.8432 14.9739C14.8865 15.0085 14.9171 15.0348 14.934 15.0519C14.9602 15.0691 15.0079 15.0997 15.0773 15.1431C15.1469 15.1865 15.2012 15.2211 15.2402 15.247C15.2795 15.2729 15.3142 15.3122 15.3441 15.3639C15.3744 15.4163 15.3857 15.4727 15.3769 15.5335C15.4291 15.5423 15.533 15.5768 15.6894 15.6375C15.7156 15.6546 15.7696 15.6701 15.8523 15.6829C15.9348 15.696 15.989 15.7157 16.0151 15.7414C14.7573 17.0703 13.2336 17.8906 11.4455 18.2031Z' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
