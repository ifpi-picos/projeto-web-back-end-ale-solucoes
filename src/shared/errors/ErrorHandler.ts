import { Response } from 'express';
import { AppError, HttpCode } from './AppError';

class ErrorHandler {
  public handleError(error: Error | AppError, response?: Response): void {
    if (this.isTrustedError(error) && response) {
      this.handleTrustedError(error as AppError, response);
    } else {
      this.handleCriticalError(error, response);
    }
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  private handleTrustedError(error: AppError, response: Response): void {
    response
      .status(error.httpCode)
      .json({ response: 'error', message: error.message, data: {} });
  }

  private handleCriticalError(
    error: Error | AppError,
    response?: Response
  ): void {
    if (response) {
      response
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ response: 'error', message: 'Internal server error' });
    }

    console.log(error);

    // exitHandler.handleExit(1);
  }
}

export const errorHandler = new ErrorHandler();
