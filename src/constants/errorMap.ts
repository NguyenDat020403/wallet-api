export const ERROR_MAP = {
  NETWORK_CREATION_FAILED: 'network creation failed',
  INCORRECT_PASSWORD: 'incorrect password',
  TOKEN_NOT_EXIST: 'something wrong',
  EMAIL_ALREADY_EXIST: 'email already exist',
  ACCOUNT_NOT_FOUND: 'account not found',
  USER_NOT_FOUND: 'user not found',
  INVALID_IDENTIFY_OR_PASSWORD: 'invalid identify or password',
  NOT_ENOUGH_BALANCE: 'not enough balance',
  TRANSACTION_NOT_FOUND: 'transaction not found',
  NOT_ALLOW_CONFIRM_TRANSACTION:
    'you are not allow to confirm this transaction',
  TRANSACTION_IS_NOT_PENDING: 'transaction is not pending',
  NETWORK_NOT_FOUND: 'network not found',
  USER_HAS_NO_REGISTER_BIOMETRIC: 'user has no register biometric',
  INVALID_SIGNATURE: 'invalid signature',
  SWAP_NOT_FOUND: 'swap not found',
  SWAP_EXIST: 'swap exist',
  SWAP_DOES_NOT_EXIST: 'swap does not exist',
  THIS_PAIR_DOES_NOT_READY_TO_SWAP: 'This pair does not ready to swap',
  INSUFFICIENT_BALANCE: 'Insufficient balance',
  NETWORK_NOT_SUPPORTED_TO_GET_GAS_SUGGESTION:
    'network not supported to get gas suggestion',
};

export const ERROR_WEB3_MAP = {
  [-32000]: 'insufficient funds',
};

export const ERROR_AUTH_MAP = {
  EA01: 'user not existed',
  EA02: 'Invalid password',
  EA10: 'Internal server error',
};

export const ERROR_AUTH_HTTP_STATUS_MAP = {
  '200': 'Success', // Đăng nhập thành công
  '400': 'Bad Request Missing or invalid parameters', // Ví dụ thiếu email/password hoặc format sai
  '401': 'Unauthorized Invalid credentials', // Email hoặc mật khẩu sai
  '403': 'Forbidden – Access denied', // Tài khoản bị khóa hoặc không có quyền
  '404': 'Not Found – User does not exist', // Không tìm thấy tài khoản
  '409': 'Conflict – Email already exists or duplicate action', // Khi đăng ký
  '422': 'Unprocessable Entity – Validation failed', // Format không hợp lệ (ví dụ: password quá ngắn)
  '429': 'Too Many Requests – Too many login attempts', // Bảo vệ khỏi brute force
  '500': 'Internal Server Error – Something went wrong on server', // Lỗi không xác định
  '503': 'Service Unavailable – Try again later', // Server quá tải hoặc bảo trì
};

const WALLET_MAP = {
  WR01: 'wallet does not exist',
  WR02: 'wallet existed',
};
